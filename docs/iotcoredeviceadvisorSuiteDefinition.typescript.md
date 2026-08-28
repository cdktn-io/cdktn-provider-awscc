# `iotcoredeviceadvisorSuiteDefinition` Submodule <a name="`iotcoredeviceadvisorSuiteDefinition` Submodule" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotcoredeviceadvisorSuiteDefinition <a name="IotcoredeviceadvisorSuiteDefinition" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition(scope: Construct, id: string, config: IotcoredeviceadvisorSuiteDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig">IotcoredeviceadvisorSuiteDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig">IotcoredeviceadvisorSuiteDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration">putSuiteDefinitionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSuiteDefinitionConfiguration` <a name="putSuiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration"></a>

```typescript
public putSuiteDefinitionConfiguration(value: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags"></a>

```typescript
public putTags(value: IResolvable | IotcoredeviceadvisorSuiteDefinitionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotcoredeviceadvisorSuiteDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotcoredeviceadvisorSuiteDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotcoredeviceadvisorSuiteDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn">suiteDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration">suiteDefinitionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId">suiteDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion">suiteDefinitionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList">IotcoredeviceadvisorSuiteDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfigurationInput">suiteDefinitionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `suiteDefinitionArn`<sup>Required</sup> <a name="suiteDefinitionArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn"></a>

```typescript
public readonly suiteDefinitionArn: string;
```

- *Type:* string

---

##### `suiteDefinitionConfiguration`<sup>Required</sup> <a name="suiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration"></a>

```typescript
public readonly suiteDefinitionConfiguration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a>

---

##### `suiteDefinitionId`<sup>Required</sup> <a name="suiteDefinitionId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId"></a>

```typescript
public readonly suiteDefinitionId: string;
```

- *Type:* string

---

##### `suiteDefinitionVersion`<sup>Required</sup> <a name="suiteDefinitionVersion" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion"></a>

```typescript
public readonly suiteDefinitionVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tags"></a>

```typescript
public readonly tags: IotcoredeviceadvisorSuiteDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList">IotcoredeviceadvisorSuiteDefinitionTagsList</a>

---

##### `suiteDefinitionConfigurationInput`<sup>Optional</sup> <a name="suiteDefinitionConfigurationInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfigurationInput"></a>

```typescript
public readonly suiteDefinitionConfigurationInput: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotcoredeviceadvisorSuiteDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotcoredeviceadvisorSuiteDefinitionConfig <a name="IotcoredeviceadvisorSuiteDefinitionConfig" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

const iotcoredeviceadvisorSuiteDefinitionConfig: iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.suiteDefinitionConfiguration">suiteDefinitionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `suiteDefinitionConfiguration`<sup>Required</sup> <a name="suiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.suiteDefinitionConfiguration"></a>

```typescript
public readonly suiteDefinitionConfiguration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotcoredeviceadvisorSuiteDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#tags IotcoredeviceadvisorSuiteDefinition#tags}

---

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

const iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration: iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devicePermissionRoleArn">devicePermissionRoleArn</a></code> | <code>string</code> | The device permission role arn of the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.rootGroup">rootGroup</a></code> | <code>string</code> | The root group of the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devices">devices</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]</code> | The devices being tested in the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.intendedForQualification">intendedForQualification</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the tests are intended for qualification in a suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.suiteDefinitionName">suiteDefinitionName</a></code> | <code>string</code> | The Name of the suite definition. |

---

##### `devicePermissionRoleArn`<sup>Required</sup> <a name="devicePermissionRoleArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devicePermissionRoleArn"></a>

```typescript
public readonly devicePermissionRoleArn: string;
```

- *Type:* string

The device permission role arn of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#device_permission_role_arn IotcoredeviceadvisorSuiteDefinition#device_permission_role_arn}

---

##### `rootGroup`<sup>Required</sup> <a name="rootGroup" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.rootGroup"></a>

```typescript
public readonly rootGroup: string;
```

- *Type:* string

The root group of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#root_group IotcoredeviceadvisorSuiteDefinition#root_group}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devices"></a>

```typescript
public readonly devices: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]

The devices being tested in the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#devices IotcoredeviceadvisorSuiteDefinition#devices}

---

##### `intendedForQualification`<sup>Optional</sup> <a name="intendedForQualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.intendedForQualification"></a>

```typescript
public readonly intendedForQualification: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the tests are intended for qualification in a suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#intended_for_qualification IotcoredeviceadvisorSuiteDefinition#intended_for_qualification}

---

##### `suiteDefinitionName`<sup>Optional</sup> <a name="suiteDefinitionName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.suiteDefinitionName"></a>

```typescript
public readonly suiteDefinitionName: string;
```

- *Type:* string

The Name of the suite definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_name IotcoredeviceadvisorSuiteDefinition#suite_definition_name}

---

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

const iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices: iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.thingArn">thingArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}.

---

##### `thingArn`<sup>Optional</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.thingArn"></a>

```typescript
public readonly thingArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}.

---

### IotcoredeviceadvisorSuiteDefinitionTags <a name="IotcoredeviceadvisorSuiteDefinitionTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

const iotcoredeviceadvisorSuiteDefinitionTags: iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#key IotcoredeviceadvisorSuiteDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotcoredeviceadvisor_suite_definition#value IotcoredeviceadvisorSuiteDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get"></a>

```typescript
public get(index: number): IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]

---


### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetThingArn">resetThingArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetThingArn` <a name="resetThingArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetThingArn"></a>

```typescript
public resetThingArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArnInput">thingArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn">thingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `thingArnInput`<sup>Optional</sup> <a name="thingArnInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArnInput"></a>

```typescript
public readonly thingArnInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `thingArn`<sup>Required</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn"></a>

```typescript
public readonly thingArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>

---


### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices">putDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetDevices">resetDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetIntendedForQualification">resetIntendedForQualification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetSuiteDefinitionName">resetSuiteDefinitionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDevices` <a name="putDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices"></a>

```typescript
public putDevices(value: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]

---

##### `resetDevices` <a name="resetDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetDevices"></a>

```typescript
public resetDevices(): void
```

##### `resetIntendedForQualification` <a name="resetIntendedForQualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetIntendedForQualification"></a>

```typescript
public resetIntendedForQualification(): void
```

##### `resetSuiteDefinitionName` <a name="resetSuiteDefinitionName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetSuiteDefinitionName"></a>

```typescript
public resetSuiteDefinitionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArnInput">devicePermissionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicesInput">devicesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualificationInput">intendedForQualificationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroupInput">rootGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionNameInput">suiteDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn">devicePermissionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification">intendedForQualification</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup">rootGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName">suiteDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices"></a>

```typescript
public readonly devices: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a>

---

##### `devicePermissionRoleArnInput`<sup>Optional</sup> <a name="devicePermissionRoleArnInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArnInput"></a>

```typescript
public readonly devicePermissionRoleArnInput: string;
```

- *Type:* string

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicesInput"></a>

```typescript
public readonly devicesInput: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]

---

##### `intendedForQualificationInput`<sup>Optional</sup> <a name="intendedForQualificationInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualificationInput"></a>

```typescript
public readonly intendedForQualificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rootGroupInput`<sup>Optional</sup> <a name="rootGroupInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroupInput"></a>

```typescript
public readonly rootGroupInput: string;
```

- *Type:* string

---

##### `suiteDefinitionNameInput`<sup>Optional</sup> <a name="suiteDefinitionNameInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionNameInput"></a>

```typescript
public readonly suiteDefinitionNameInput: string;
```

- *Type:* string

---

##### `devicePermissionRoleArn`<sup>Required</sup> <a name="devicePermissionRoleArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn"></a>

```typescript
public readonly devicePermissionRoleArn: string;
```

- *Type:* string

---

##### `intendedForQualification`<sup>Required</sup> <a name="intendedForQualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification"></a>

```typescript
public readonly intendedForQualification: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rootGroup`<sup>Required</sup> <a name="rootGroup" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup"></a>

```typescript
public readonly rootGroup: string;
```

- *Type:* string

---

##### `suiteDefinitionName`<sup>Required</sup> <a name="suiteDefinitionName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName"></a>

```typescript
public readonly suiteDefinitionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---


### IotcoredeviceadvisorSuiteDefinitionTagsList <a name="IotcoredeviceadvisorSuiteDefinitionTagsList" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get"></a>

```typescript
public get(index: number): IotcoredeviceadvisorSuiteDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotcoredeviceadvisorSuiteDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]

---


### IotcoredeviceadvisorSuiteDefinitionTagsOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionTagsOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { iotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotcoredeviceadvisorSuiteDefinitionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>

---



