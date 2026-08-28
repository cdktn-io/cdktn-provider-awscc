# `observabilityadminS3TableIntegration` Submodule <a name="`observabilityadminS3TableIntegration` Submodule" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminS3TableIntegration <a name="ObservabilityadminS3TableIntegration" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration awscc_observabilityadmin_s3_table_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration(scope: Construct, id: string, config: ObservabilityadminS3TableIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig">ObservabilityadminS3TableIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig">ObservabilityadminS3TableIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putLogSources">putLogSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetLogSources">resetLogSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption"></a>

```typescript
public putEncryption(value: ObservabilityadminS3TableIntegrationEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

---

##### `putLogSources` <a name="putLogSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putLogSources"></a>

```typescript
public putLogSources(value: IResolvable | ObservabilityadminS3TableIntegrationLogSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putLogSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTags"></a>

```typescript
public putTags(value: IResolvable | ObservabilityadminS3TableIntegrationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>[]

---

##### `resetLogSources` <a name="resetLogSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetLogSources"></a>

```typescript
public resetLogSources(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityadminS3TableIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityadminS3TableIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminS3TableIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference">ObservabilityadminS3TableIntegrationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.logSources">logSources</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList">ObservabilityadminS3TableIntegrationLogSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList">ObservabilityadminS3TableIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryptionInput">encryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.logSourcesInput">logSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryption"></a>

```typescript
public readonly encryption: ObservabilityadminS3TableIntegrationEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference">ObservabilityadminS3TableIntegrationEncryptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logSources`<sup>Required</sup> <a name="logSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.logSources"></a>

```typescript
public readonly logSources: ObservabilityadminS3TableIntegrationLogSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList">ObservabilityadminS3TableIntegrationLogSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tags"></a>

```typescript
public readonly tags: ObservabilityadminS3TableIntegrationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList">ObservabilityadminS3TableIntegrationTagsList</a>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: IResolvable | ObservabilityadminS3TableIntegrationEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

---

##### `logSourcesInput`<sup>Optional</sup> <a name="logSourcesInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.logSourcesInput"></a>

```typescript
public readonly logSourcesInput: IResolvable | ObservabilityadminS3TableIntegrationLogSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ObservabilityadminS3TableIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminS3TableIntegrationConfig <a name="ObservabilityadminS3TableIntegrationConfig" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

const observabilityadminS3TableIntegrationConfig: observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a></code> | Encryption configuration for the S3 Table Integration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the role used to access the S3 Table Integration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.logSources">logSources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>[]</code> | The CloudWatch Logs data sources to associate with the S3 Table Integration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.encryption"></a>

```typescript
public readonly encryption: ObservabilityadminS3TableIntegrationEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

Encryption configuration for the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#encryption ObservabilityadminS3TableIntegration#encryption}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the role used to access the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#role_arn ObservabilityadminS3TableIntegration#role_arn}

---

##### `logSources`<sup>Optional</sup> <a name="logSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.logSources"></a>

```typescript
public readonly logSources: IResolvable | ObservabilityadminS3TableIntegrationLogSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>[]

The CloudWatch Logs data sources to associate with the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#log_sources ObservabilityadminS3TableIntegration#log_sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ObservabilityadminS3TableIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#tags ObservabilityadminS3TableIntegration#tags}

---

### ObservabilityadminS3TableIntegrationEncryption <a name="ObservabilityadminS3TableIntegrationEncryption" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

const observabilityadminS3TableIntegrationEncryption: observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | The server-side encryption algorithm used to encrypt the S3 Table(s) data. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key used to encrypt the S3 Table Integration. |

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

The server-side encryption algorithm used to encrypt the S3 Table(s) data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#sse_algorithm ObservabilityadminS3TableIntegration#sse_algorithm}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key used to encrypt the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#kms_key_arn ObservabilityadminS3TableIntegration#kms_key_arn}

---

### ObservabilityadminS3TableIntegrationLogSources <a name="ObservabilityadminS3TableIntegrationLogSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

const observabilityadminS3TableIntegrationLogSources: observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.identifier">identifier</a></code> | <code>string</code> | The ID of the CloudWatch Logs data source association. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.name">name</a></code> | <code>string</code> | The name of the CloudWatch Logs data source. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.type">type</a></code> | <code>string</code> | The type of the CloudWatch Logs data source. |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The ID of the CloudWatch Logs data source association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#identifier ObservabilityadminS3TableIntegration#identifier}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the CloudWatch Logs data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#name ObservabilityadminS3TableIntegration#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the CloudWatch Logs data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#type ObservabilityadminS3TableIntegration#type}

---

### ObservabilityadminS3TableIntegrationTags <a name="ObservabilityadminS3TableIntegrationTags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

const observabilityadminS3TableIntegrationTags: observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#key ObservabilityadminS3TableIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_s3_table_integration#value ObservabilityadminS3TableIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminS3TableIntegrationEncryptionOutputReference <a name="ObservabilityadminS3TableIntegrationEncryptionOutputReference" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithmInput">sseAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sseAlgorithmInput`<sup>Optional</sup> <a name="sseAlgorithmInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithmInput"></a>

```typescript
public readonly sseAlgorithmInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminS3TableIntegrationEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

---


### ObservabilityadminS3TableIntegrationLogSourcesList <a name="ObservabilityadminS3TableIntegrationLogSourcesList" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.get"></a>

```typescript
public get(index: number): ObservabilityadminS3TableIntegrationLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminS3TableIntegrationLogSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>[]

---


### ObservabilityadminS3TableIntegrationLogSourcesOutputReference <a name="ObservabilityadminS3TableIntegrationLogSourcesOutputReference" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminS3TableIntegrationLogSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>

---


### ObservabilityadminS3TableIntegrationTagsList <a name="ObservabilityadminS3TableIntegrationTagsList" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.get"></a>

```typescript
public get(index: number): ObservabilityadminS3TableIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminS3TableIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>[]

---


### ObservabilityadminS3TableIntegrationTagsOutputReference <a name="ObservabilityadminS3TableIntegrationTagsOutputReference" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer"></a>

```typescript
import { observabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminS3TableIntegrationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>

---



