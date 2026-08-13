# `appsyncFunctionConfiguration` Submodule <a name="`appsyncFunctionConfiguration` Submodule" id="@cdktn/provider-awscc.appsyncFunctionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncFunctionConfiguration <a name="AppsyncFunctionConfiguration" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration awscc_appsync_function_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

new appsyncFunctionConfiguration.AppsyncFunctionConfiguration(scope: Construct, id: string, config: AppsyncFunctionConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig">AppsyncFunctionConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig">AppsyncFunctionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime">putRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig">putSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCodeS3Location">resetCodeS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetFunctionVersion">resetFunctionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetMaxBatchSize">resetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplate">resetRequestMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplateS3Location">resetRequestMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplate">resetResponseMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplateS3Location">resetResponseMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetSyncConfig">resetSyncConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRuntime` <a name="putRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime"></a>

```typescript
public putRuntime(value: AppsyncFunctionConfigurationRuntime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

---

##### `putSyncConfig` <a name="putSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig"></a>

```typescript
public putSyncConfig(value: AppsyncFunctionConfigurationSyncConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

---

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetCodeS3Location` <a name="resetCodeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCodeS3Location"></a>

```typescript
public resetCodeS3Location(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFunctionVersion` <a name="resetFunctionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetFunctionVersion"></a>

```typescript
public resetFunctionVersion(): void
```

##### `resetMaxBatchSize` <a name="resetMaxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetMaxBatchSize"></a>

```typescript
public resetMaxBatchSize(): void
```

##### `resetRequestMappingTemplate` <a name="resetRequestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplate"></a>

```typescript
public resetRequestMappingTemplate(): void
```

##### `resetRequestMappingTemplateS3Location` <a name="resetRequestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplateS3Location"></a>

```typescript
public resetRequestMappingTemplateS3Location(): void
```

##### `resetResponseMappingTemplate` <a name="resetResponseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplate"></a>

```typescript
public resetResponseMappingTemplate(): void
```

##### `resetResponseMappingTemplateS3Location` <a name="resetResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplateS3Location"></a>

```typescript
public resetResponseMappingTemplateS3Location(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetSyncConfig` <a name="resetSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetSyncConfig"></a>

```typescript
public resetSyncConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncFunctionConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncFunctionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncFunctionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference">AppsyncFunctionConfigurationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference">AppsyncFunctionConfigurationSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3LocationInput">codeS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceNameInput">dataSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersionInput">functionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSizeInput">maxBatchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateInput">requestMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3LocationInput">requestMappingTemplateS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateInput">responseMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3LocationInput">responseMappingTemplateS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtimeInput">runtimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfigInput">syncConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3Location">codeS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersion">functionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3Location">requestMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3Location">responseMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtime"></a>

```typescript
public readonly runtime: AppsyncFunctionConfigurationRuntimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference">AppsyncFunctionConfigurationRuntimeOutputReference</a>

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncFunctionConfigurationSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference">AppsyncFunctionConfigurationSyncConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `codeS3LocationInput`<sup>Optional</sup> <a name="codeS3LocationInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3LocationInput"></a>

```typescript
public readonly codeS3LocationInput: string;
```

- *Type:* string

---

##### `dataSourceNameInput`<sup>Optional</sup> <a name="dataSourceNameInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceNameInput"></a>

```typescript
public readonly dataSourceNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `functionVersionInput`<sup>Optional</sup> <a name="functionVersionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersionInput"></a>

```typescript
public readonly functionVersionInput: string;
```

- *Type:* string

---

##### `maxBatchSizeInput`<sup>Optional</sup> <a name="maxBatchSizeInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSizeInput"></a>

```typescript
public readonly maxBatchSizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestMappingTemplateInput`<sup>Optional</sup> <a name="requestMappingTemplateInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateInput"></a>

```typescript
public readonly requestMappingTemplateInput: string;
```

- *Type:* string

---

##### `requestMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="requestMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3LocationInput"></a>

```typescript
public readonly requestMappingTemplateS3LocationInput: string;
```

- *Type:* string

---

##### `responseMappingTemplateInput`<sup>Optional</sup> <a name="responseMappingTemplateInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateInput"></a>

```typescript
public readonly responseMappingTemplateInput: string;
```

- *Type:* string

---

##### `responseMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="responseMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3LocationInput"></a>

```typescript
public readonly responseMappingTemplateS3LocationInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: IResolvable | AppsyncFunctionConfigurationRuntime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

---

##### `syncConfigInput`<sup>Optional</sup> <a name="syncConfigInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfigInput"></a>

```typescript
public readonly syncConfigInput: IResolvable | AppsyncFunctionConfigurationSyncConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `codeS3Location`<sup>Required</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3Location"></a>

```typescript
public readonly codeS3Location: string;
```

- *Type:* string

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionVersion`<sup>Required</sup> <a name="functionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersion"></a>

```typescript
public readonly functionVersion: string;
```

- *Type:* string

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="requestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: string;
```

- *Type:* string

---

##### `requestMappingTemplateS3Location`<sup>Required</sup> <a name="requestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3Location"></a>

```typescript
public readonly requestMappingTemplateS3Location: string;
```

- *Type:* string

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="responseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: string;
```

- *Type:* string

---

##### `responseMappingTemplateS3Location`<sup>Required</sup> <a name="responseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3Location"></a>

```typescript
public readonly responseMappingTemplateS3Location: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncFunctionConfigurationConfig <a name="AppsyncFunctionConfigurationConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.Initializer"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

const appsyncFunctionConfigurationConfig: appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.apiId">apiId</a></code> | <code>string</code> | The AWS AppSync GraphQL API that you want to attach using this function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | The name of data source this function will attach. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.name">name</a></code> | <code>string</code> | The name of the function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.code">code</a></code> | <code>string</code> | The resolver code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.codeS3Location">codeS3Location</a></code> | <code>string</code> | The Amazon S3 endpoint (where the code is located??). |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.description">description</a></code> | <code>string</code> | The function description. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.functionVersion">functionVersion</a></code> | <code>string</code> | The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>string</code> | The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplateS3Location">requestMappingTemplateS3Location</a></code> | <code>string</code> | Describes a Sync configuration for a resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>string</code> | The Function response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplateS3Location">responseMappingTemplateS3Location</a></code> | <code>string</code> | The location of a response mapping template in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | Describes a Sync configuration for a resolver. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The AWS AppSync GraphQL API that you want to attach using this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#api_id AppsyncFunctionConfiguration#api_id}

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

The name of data source this function will attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#data_source_name AppsyncFunctionConfiguration#data_source_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

The resolver code that contains the request and response functions.

When code is used, the runtime is required. The runtime value must be APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#code AppsyncFunctionConfiguration#code}

---

##### `codeS3Location`<sup>Optional</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.codeS3Location"></a>

```typescript
public readonly codeS3Location: string;
```

- *Type:* string

The Amazon S3 endpoint (where the code is located??).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#code_s3_location AppsyncFunctionConfiguration#code_s3_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#description AppsyncFunctionConfiguration#description}

---

##### `functionVersion`<sup>Optional</sup> <a name="functionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.functionVersion"></a>

```typescript
public readonly functionVersion: string;
```

- *Type:* string

The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#function_version AppsyncFunctionConfiguration#function_version}

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#max_batch_size AppsyncFunctionConfiguration#max_batch_size}

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="requestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: string;
```

- *Type:* string

The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#request_mapping_template AppsyncFunctionConfiguration#request_mapping_template}

---

##### `requestMappingTemplateS3Location`<sup>Optional</sup> <a name="requestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplateS3Location"></a>

```typescript
public readonly requestMappingTemplateS3Location: string;
```

- *Type:* string

Describes a Sync configuration for a resolver.

Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#request_mapping_template_s3_location AppsyncFunctionConfiguration#request_mapping_template_s3_location}

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="responseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: string;
```

- *Type:* string

The Function response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#response_mapping_template AppsyncFunctionConfiguration#response_mapping_template}

---

##### `responseMappingTemplateS3Location`<sup>Optional</sup> <a name="responseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplateS3Location"></a>

```typescript
public readonly responseMappingTemplateS3Location: string;
```

- *Type:* string

The location of a response mapping template in an Amazon S3 bucket.

Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#response_mapping_template_s3_location AppsyncFunctionConfiguration#response_mapping_template_s3_location}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.runtime"></a>

```typescript
public readonly runtime: AppsyncFunctionConfigurationRuntime;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#runtime AppsyncFunctionConfiguration#runtime}

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncFunctionConfigurationSyncConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

Describes a Sync configuration for a resolver.

Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#sync_config AppsyncFunctionConfiguration#sync_config}

---

### AppsyncFunctionConfigurationRuntime <a name="AppsyncFunctionConfigurationRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.Initializer"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

const appsyncFunctionConfigurationRuntime: appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.name">name</a></code> | <code>string</code> | The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | The version of the runtime to use. Currently, the only allowed version is 1.0.0. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

The version of the runtime to use. Currently, the only allowed version is 1.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#runtime_version AppsyncFunctionConfiguration#runtime_version}

---

### AppsyncFunctionConfigurationSyncConfig <a name="AppsyncFunctionConfigurationSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.Initializer"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

const appsyncFunctionConfigurationSyncConfig: appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | The Conflict Detection strategy to use. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | The Conflict Resolution strategy to perform in the event of a conflict. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler. |

---

##### `conflictDetection`<sup>Optional</sup> <a name="conflictDetection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

The Conflict Detection strategy to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#conflict_detection AppsyncFunctionConfiguration#conflict_detection}

---

##### `conflictHandler`<sup>Optional</sup> <a name="conflictHandler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

The Conflict Resolution strategy to perform in the event of a conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#conflict_handler AppsyncFunctionConfiguration#conflict_handler}

---

##### `lambdaConflictHandlerConfig`<sup>Optional</sup> <a name="lambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_config AppsyncFunctionConfiguration#lambda_conflict_handler_config}

---

### AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig <a name="AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

const appsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig: appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler. |

---

##### `lambdaConflictHandlerArn`<sup>Optional</sup> <a name="lambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_arn AppsyncFunctionConfiguration#lambda_conflict_handler_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncFunctionConfigurationRuntimeOutputReference <a name="AppsyncFunctionConfigurationRuntimeOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

new appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncFunctionConfigurationRuntime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

---


### AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

new appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">resetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaConflictHandlerArn` <a name="resetLambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```typescript
public resetLambdaConflictHandlerArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambdaConflictHandlerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="lambdaConflictHandlerArnInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```typescript
public readonly lambdaConflictHandlerArnInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="lambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncFunctionConfigurationSyncConfigOutputReference <a name="AppsyncFunctionConfigurationSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer"></a>

```typescript
import { appsyncFunctionConfiguration } from '@cdktn/provider-awscc'

new appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig">putLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictDetection">resetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictHandler">resetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetLambdaConflictHandlerConfig">resetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConflictHandlerConfig` <a name="putLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```typescript
public putLambdaConflictHandlerConfig(value: AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---

##### `resetConflictDetection` <a name="resetConflictDetection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictDetection"></a>

```typescript
public resetConflictDetection(): void
```

##### `resetConflictHandler` <a name="resetConflictHandler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictHandler"></a>

```typescript
public resetConflictHandler(): void
```

##### `resetLambdaConflictHandlerConfig` <a name="resetLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```typescript
public resetLambdaConflictHandlerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetectionInput">conflictDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandlerInput">conflictHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambdaConflictHandlerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="lambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflictDetectionInput`<sup>Optional</sup> <a name="conflictDetectionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetectionInput"></a>

```typescript
public readonly conflictDetectionInput: string;
```

- *Type:* string

---

##### `conflictHandlerInput`<sup>Optional</sup> <a name="conflictHandlerInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandlerInput"></a>

```typescript
public readonly conflictHandlerInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="lambdaConflictHandlerConfigInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```typescript
public readonly lambdaConflictHandlerConfigInput: IResolvable | AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflictDetection`<sup>Required</sup> <a name="conflictDetection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

---

##### `conflictHandler`<sup>Required</sup> <a name="conflictHandler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncFunctionConfigurationSyncConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

---



