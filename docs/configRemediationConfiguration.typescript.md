# `configRemediationConfiguration` Submodule <a name="`configRemediationConfiguration` Submodule" id="@cdktn/provider-awscc.configRemediationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigRemediationConfiguration <a name="ConfigRemediationConfiguration" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration awscc_config_remediation_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

new configRemediationConfiguration.ConfigRemediationConfiguration(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig">ConfigRemediationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig">ConfigRemediationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls">putExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls">resetExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts">resetMaximumAutomaticAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds">resetRetryAttemptSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion">resetTargetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExecutionControls` <a name="putExecutionControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls"></a>

```typescript
public putExecutionControls(value: ConfigRemediationConfigurationExecutionControls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic"></a>

```typescript
public resetAutomatic(): void
```

##### `resetExecutionControls` <a name="resetExecutionControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls"></a>

```typescript
public resetExecutionControls(): void
```

##### `resetMaximumAutomaticAttempts` <a name="resetMaximumAutomaticAttempts" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts"></a>

```typescript
public resetMaximumAutomaticAttempts(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetRetryAttemptSeconds` <a name="resetRetryAttemptSeconds" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds"></a>

```typescript
public resetRetryAttemptSeconds(): void
```

##### `resetTargetVersion` <a name="resetTargetVersion" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion"></a>

```typescript
public resetTargetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigRemediationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.generateConfigForImport"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

configRemediationConfiguration.ConfigRemediationConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConfigRemediationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigRemediationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigRemediationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigRemediationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls">executionControls</a></code> | <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput">automaticInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput">configRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput">executionControlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput">maximumAutomaticAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput">retryAttemptSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput">targetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic">automatic</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName">configRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts">maximumAutomaticAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds">retryAttemptSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `executionControls`<sup>Required</sup> <a name="executionControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls"></a>

```typescript
public readonly executionControls: ConfigRemediationConfigurationExecutionControlsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput"></a>

```typescript
public readonly automaticInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `configRuleNameInput`<sup>Optional</sup> <a name="configRuleNameInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput"></a>

```typescript
public readonly configRuleNameInput: string;
```

- *Type:* string

---

##### `executionControlsInput`<sup>Optional</sup> <a name="executionControlsInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput"></a>

```typescript
public readonly executionControlsInput: IResolvable | ConfigRemediationConfigurationExecutionControls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---

##### `maximumAutomaticAttemptsInput`<sup>Optional</sup> <a name="maximumAutomaticAttemptsInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput"></a>

```typescript
public readonly maximumAutomaticAttemptsInput: number;
```

- *Type:* number

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `retryAttemptSecondsInput`<sup>Optional</sup> <a name="retryAttemptSecondsInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput"></a>

```typescript
public readonly retryAttemptSecondsInput: number;
```

- *Type:* number

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput"></a>

```typescript
public readonly targetVersionInput: string;
```

- *Type:* string

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `configRuleName`<sup>Required</sup> <a name="configRuleName" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName"></a>

```typescript
public readonly configRuleName: string;
```

- *Type:* string

---

##### `maximumAutomaticAttempts`<sup>Required</sup> <a name="maximumAutomaticAttempts" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts"></a>

```typescript
public readonly maximumAutomaticAttempts: number;
```

- *Type:* number

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `retryAttemptSeconds`<sup>Required</sup> <a name="retryAttemptSeconds" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds"></a>

```typescript
public readonly retryAttemptSeconds: number;
```

- *Type:* number

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigRemediationConfigurationConfig <a name="ConfigRemediationConfigurationConfig" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

const configRemediationConfigurationConfig: configRemediationConfiguration.ConfigRemediationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName">configRuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType">targetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic">automatic</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls">executionControls</a></code> | <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts">maximumAutomaticAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#parameters ConfigRemediationConfiguration#parameters}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds">retryAttemptSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion">targetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configRuleName`<sup>Required</sup> <a name="configRuleName" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName"></a>

```typescript
public readonly configRuleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}.

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}.

---

##### `executionControls`<sup>Optional</sup> <a name="executionControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls"></a>

```typescript
public readonly executionControls: ConfigRemediationConfigurationExecutionControls;
```

- *Type:* <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}.

---

##### `maximumAutomaticAttempts`<sup>Optional</sup> <a name="maximumAutomaticAttempts" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts"></a>

```typescript
public readonly maximumAutomaticAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#parameters ConfigRemediationConfiguration#parameters}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}.

---

##### `retryAttemptSeconds`<sup>Optional</sup> <a name="retryAttemptSeconds" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds"></a>

```typescript
public readonly retryAttemptSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}.

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}.

---

### ConfigRemediationConfigurationExecutionControls <a name="ConfigRemediationConfigurationExecutionControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

const configRemediationConfigurationExecutionControls: configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls">ssmControls</a></code> | <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}. |

---

##### `ssmControls`<sup>Optional</sup> <a name="ssmControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls"></a>

```typescript
public readonly ssmControls: ConfigRemediationConfigurationExecutionControlsSsmControls;
```

- *Type:* <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}.

---

### ConfigRemediationConfigurationExecutionControlsSsmControls <a name="ConfigRemediationConfigurationExecutionControlsSsmControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

const configRemediationConfigurationExecutionControlsSsmControls: configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage">concurrentExecutionRatePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage">errorPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}. |

---

##### `concurrentExecutionRatePercentage`<sup>Optional</sup> <a name="concurrentExecutionRatePercentage" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage"></a>

```typescript
public readonly concurrentExecutionRatePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}.

---

##### `errorPercentage`<sup>Optional</sup> <a name="errorPercentage" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage"></a>

```typescript
public readonly errorPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigRemediationConfigurationExecutionControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsOutputReference" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

new configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls">putSsmControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls">resetSsmControls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsmControls` <a name="putSsmControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls"></a>

```typescript
public putSsmControls(value: ConfigRemediationConfigurationExecutionControlsSsmControls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---

##### `resetSsmControls` <a name="resetSsmControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls"></a>

```typescript
public resetSsmControls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls">ssmControls</a></code> | <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput">ssmControlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ssmControls`<sup>Required</sup> <a name="ssmControls" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls"></a>

```typescript
public readonly ssmControls: ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a>

---

##### `ssmControlsInput`<sup>Optional</sup> <a name="ssmControlsInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput"></a>

```typescript
public readonly ssmControlsInput: IResolvable | ConfigRemediationConfigurationExecutionControlsSsmControls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigRemediationConfigurationExecutionControls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---


### ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktn/provider-awscc'

new configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage">resetConcurrentExecutionRatePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage">resetErrorPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConcurrentExecutionRatePercentage` <a name="resetConcurrentExecutionRatePercentage" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage"></a>

```typescript
public resetConcurrentExecutionRatePercentage(): void
```

##### `resetErrorPercentage` <a name="resetErrorPercentage" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage"></a>

```typescript
public resetErrorPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput">concurrentExecutionRatePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput">errorPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage">concurrentExecutionRatePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage">errorPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `concurrentExecutionRatePercentageInput`<sup>Optional</sup> <a name="concurrentExecutionRatePercentageInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput"></a>

```typescript
public readonly concurrentExecutionRatePercentageInput: number;
```

- *Type:* number

---

##### `errorPercentageInput`<sup>Optional</sup> <a name="errorPercentageInput" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput"></a>

```typescript
public readonly errorPercentageInput: number;
```

- *Type:* number

---

##### `concurrentExecutionRatePercentage`<sup>Required</sup> <a name="concurrentExecutionRatePercentage" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage"></a>

```typescript
public readonly concurrentExecutionRatePercentage: number;
```

- *Type:* number

---

##### `errorPercentage`<sup>Required</sup> <a name="errorPercentage" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage"></a>

```typescript
public readonly errorPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigRemediationConfigurationExecutionControlsSsmControls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---



