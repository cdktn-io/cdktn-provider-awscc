# `dataAwsccAppsyncFunctionConfiguration` Submodule <a name="`dataAwsccAppsyncFunctionConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncFunctionConfiguration <a name="DataAwsccAppsyncFunctionConfiguration" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_function_configuration awscc_appsync_function_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration(scope: Construct, id: string, config: DataAwsccAppsyncFunctionConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig">DataAwsccAppsyncFunctionConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig">DataAwsccAppsyncFunctionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isConstruct"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppsyncFunctionConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppsyncFunctionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_function_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncFunctionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.codeS3Location">codeS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionVersion">functionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.requestMappingTemplateS3Location">requestMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.responseMappingTemplateS3Location">responseMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference">DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference">DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `codeS3Location`<sup>Required</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.codeS3Location"></a>

```typescript
public readonly codeS3Location: string;
```

- *Type:* string

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `functionVersion`<sup>Required</sup> <a name="functionVersion" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionVersion"></a>

```typescript
public readonly functionVersion: string;
```

- *Type:* string

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="requestMappingTemplate" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: string;
```

- *Type:* string

---

##### `requestMappingTemplateS3Location`<sup>Required</sup> <a name="requestMappingTemplateS3Location" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.requestMappingTemplateS3Location"></a>

```typescript
public readonly requestMappingTemplateS3Location: string;
```

- *Type:* string

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="responseMappingTemplate" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: string;
```

- *Type:* string

---

##### `responseMappingTemplateS3Location`<sup>Required</sup> <a name="responseMappingTemplateS3Location" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.responseMappingTemplateS3Location"></a>

```typescript
public readonly responseMappingTemplateS3Location: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.runtime"></a>

```typescript
public readonly runtime: DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference">DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference</a>

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.syncConfig"></a>

```typescript
public readonly syncConfig: DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference">DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncFunctionConfigurationConfig <a name="DataAwsccAppsyncFunctionConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccAppsyncFunctionConfigurationConfig: dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_function_configuration#id DataAwsccAppsyncFunctionConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncFunctionConfigurationRuntime <a name="DataAwsccAppsyncFunctionConfigurationRuntime" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntime.Initializer"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccAppsyncFunctionConfigurationRuntime: dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntime = { ... }
```


### DataAwsccAppsyncFunctionConfigurationSyncConfig <a name="DataAwsccAppsyncFunctionConfigurationSyncConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccAppsyncFunctionConfigurationSyncConfig: dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfig = { ... }
```


### DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig <a name="DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig: dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference <a name="DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntime">DataAwsccAppsyncFunctionConfigurationRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncFunctionConfigurationRuntime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntime">DataAwsccAppsyncFunctionConfigurationRuntime</a>

---


### DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference <a name="DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="lambdaConflictHandlerArn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---


### DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference <a name="DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncFunctionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfig">DataAwsccAppsyncFunctionConfigurationSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conflictDetection`<sup>Required</sup> <a name="conflictDetection" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

---

##### `conflictHandler`<sup>Required</sup> <a name="conflictHandler" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="lambdaConflictHandlerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncFunctionConfigurationSyncConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfig">DataAwsccAppsyncFunctionConfigurationSyncConfig</a>

---



