# `dataAwsccSagemakerStudioLifecycleConfig` Submodule <a name="`dataAwsccSagemakerStudioLifecycleConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerStudioLifecycleConfig <a name="DataAwsccSagemakerStudioLifecycleConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_studio_lifecycle_config awscc_sagemaker_studio_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerStudioLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig(scope: Construct, id: string, config: DataAwsccSagemakerStudioLifecycleConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig">DataAwsccSagemakerStudioLifecycleConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig">DataAwsccSagemakerStudioLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerStudioLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isConstruct"></a>

```typescript
import { dataAwsccSagemakerStudioLifecycleConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerStudioLifecycleConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerStudioLifecycleConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerStudioLifecycleConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerStudioLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerStudioLifecycleConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerStudioLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_studio_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerStudioLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType">studioLifecycleConfigAppType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigArn">studioLifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent">studioLifecycleConfigContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigName">studioLifecycleConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList">DataAwsccSagemakerStudioLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `studioLifecycleConfigAppType`<sup>Required</sup> <a name="studioLifecycleConfigAppType" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType"></a>

```typescript
public readonly studioLifecycleConfigAppType: string;
```

- *Type:* string

---

##### `studioLifecycleConfigArn`<sup>Required</sup> <a name="studioLifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigArn"></a>

```typescript
public readonly studioLifecycleConfigArn: string;
```

- *Type:* string

---

##### `studioLifecycleConfigContent`<sup>Required</sup> <a name="studioLifecycleConfigContent" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent"></a>

```typescript
public readonly studioLifecycleConfigContent: string;
```

- *Type:* string

---

##### `studioLifecycleConfigName`<sup>Required</sup> <a name="studioLifecycleConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigName"></a>

```typescript
public readonly studioLifecycleConfigName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerStudioLifecycleConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList">DataAwsccSagemakerStudioLifecycleConfigTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerStudioLifecycleConfigConfig <a name="DataAwsccSagemakerStudioLifecycleConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerStudioLifecycleConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerStudioLifecycleConfigConfig: dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_studio_lifecycle_config#id DataAwsccSagemakerStudioLifecycleConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerStudioLifecycleConfigTags <a name="DataAwsccSagemakerStudioLifecycleConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerStudioLifecycleConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerStudioLifecycleConfigTags: dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerStudioLifecycleConfigTagsList <a name="DataAwsccSagemakerStudioLifecycleConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerStudioLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference <a name="DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerStudioLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTags">DataAwsccSagemakerStudioLifecycleConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerStudioLifecycleConfigTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTags">DataAwsccSagemakerStudioLifecycleConfigTags</a>

---



