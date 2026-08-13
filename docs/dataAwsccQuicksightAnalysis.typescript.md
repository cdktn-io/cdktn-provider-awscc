# `dataAwsccQuicksightAnalysis` Submodule <a name="`dataAwsccQuicksightAnalysis` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightAnalysis <a name="DataAwsccQuicksightAnalysis" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_analysis awscc_quicksight_analysis}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis(scope: Construct, id: string, config: DataAwsccQuicksightAnalysisConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig">DataAwsccQuicksightAnalysisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig">DataAwsccQuicksightAnalysisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightAnalysis resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isConstruct"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformElement"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformDataSource"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccQuicksightAnalysis resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightAnalysis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_analysis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.analysisId">analysisId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.dataSetArns">dataSetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList">DataAwsccQuicksightAnalysisErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference">DataAwsccQuicksightAnalysisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList">DataAwsccQuicksightAnalysisPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.sheets">sheets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList">DataAwsccQuicksightAnalysisSheetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference">DataAwsccQuicksightAnalysisSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList">DataAwsccQuicksightAnalysisTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.themeArn">themeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.analysisId"></a>

```typescript
public readonly analysisId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `dataSetArns`<sup>Required</sup> <a name="dataSetArns" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.dataSetArns"></a>

```typescript
public readonly dataSetArns: string[];
```

- *Type:* string[]

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.errors"></a>

```typescript
public readonly errors: DataAwsccQuicksightAnalysisErrorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList">DataAwsccQuicksightAnalysisErrorsList</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.parameters"></a>

```typescript
public readonly parameters: DataAwsccQuicksightAnalysisParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference">DataAwsccQuicksightAnalysisParametersOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.permissions"></a>

```typescript
public readonly permissions: DataAwsccQuicksightAnalysisPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList">DataAwsccQuicksightAnalysisPermissionsList</a>

---

##### `sheets`<sup>Required</sup> <a name="sheets" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.sheets"></a>

```typescript
public readonly sheets: DataAwsccQuicksightAnalysisSheetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList">DataAwsccQuicksightAnalysisSheetsList</a>

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.sourceEntity"></a>

```typescript
public readonly sourceEntity: DataAwsccQuicksightAnalysisSourceEntityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference">DataAwsccQuicksightAnalysisSourceEntityOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.tags"></a>

```typescript
public readonly tags: DataAwsccQuicksightAnalysisTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList">DataAwsccQuicksightAnalysisTagsList</a>

---

##### `themeArn`<sup>Required</sup> <a name="themeArn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.themeArn"></a>

```typescript
public readonly themeArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysis.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightAnalysisConfig <a name="DataAwsccQuicksightAnalysisConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisConfig: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_analysis#id DataAwsccQuicksightAnalysis#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightAnalysisErrors <a name="DataAwsccQuicksightAnalysisErrors" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrors.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisErrors: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrors = { ... }
```


### DataAwsccQuicksightAnalysisParameters <a name="DataAwsccQuicksightAnalysisParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParameters.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisParameters: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParameters = { ... }
```


### DataAwsccQuicksightAnalysisParametersDateTimeParameters <a name="DataAwsccQuicksightAnalysisParametersDateTimeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisParametersDateTimeParameters: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters = { ... }
```


### DataAwsccQuicksightAnalysisParametersDecimalParameters <a name="DataAwsccQuicksightAnalysisParametersDecimalParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisParametersDecimalParameters: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters = { ... }
```


### DataAwsccQuicksightAnalysisParametersIntegerParameters <a name="DataAwsccQuicksightAnalysisParametersIntegerParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisParametersIntegerParameters: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters = { ... }
```


### DataAwsccQuicksightAnalysisParametersStringParameters <a name="DataAwsccQuicksightAnalysisParametersStringParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParameters.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisParametersStringParameters: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParameters = { ... }
```


### DataAwsccQuicksightAnalysisPermissions <a name="DataAwsccQuicksightAnalysisPermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissions.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisPermissions: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissions = { ... }
```


### DataAwsccQuicksightAnalysisSheets <a name="DataAwsccQuicksightAnalysisSheets" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheets.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisSheets: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheets = { ... }
```


### DataAwsccQuicksightAnalysisSourceEntity <a name="DataAwsccQuicksightAnalysisSourceEntity" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntity.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisSourceEntity: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntity = { ... }
```


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplate <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplate" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisSourceEntitySourceTemplate: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate = { ... }
```


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences = { ... }
```


### DataAwsccQuicksightAnalysisTags <a name="DataAwsccQuicksightAnalysisTags" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTags.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

const dataAwsccQuicksightAnalysisTags: dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightAnalysisErrorsList <a name="DataAwsccQuicksightAnalysisErrorsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightAnalysisErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightAnalysisErrorsOutputReference <a name="DataAwsccQuicksightAnalysisErrorsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrors">DataAwsccQuicksightAnalysisErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisErrors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisErrors">DataAwsccQuicksightAnalysisErrors</a>

---


### DataAwsccQuicksightAnalysisParametersDateTimeParametersList <a name="DataAwsccQuicksightAnalysisParametersDateTimeParametersList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters">DataAwsccQuicksightAnalysisParametersDateTimeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisParametersDateTimeParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParameters">DataAwsccQuicksightAnalysisParametersDateTimeParameters</a>

---


### DataAwsccQuicksightAnalysisParametersDecimalParametersList <a name="DataAwsccQuicksightAnalysisParametersDecimalParametersList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters">DataAwsccQuicksightAnalysisParametersDecimalParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisParametersDecimalParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParameters">DataAwsccQuicksightAnalysisParametersDecimalParameters</a>

---


### DataAwsccQuicksightAnalysisParametersIntegerParametersList <a name="DataAwsccQuicksightAnalysisParametersIntegerParametersList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters">DataAwsccQuicksightAnalysisParametersIntegerParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisParametersIntegerParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParameters">DataAwsccQuicksightAnalysisParametersIntegerParameters</a>

---


### DataAwsccQuicksightAnalysisParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.dateTimeParameters">dateTimeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList">DataAwsccQuicksightAnalysisParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.decimalParameters">decimalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList">DataAwsccQuicksightAnalysisParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.integerParameters">integerParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList">DataAwsccQuicksightAnalysisParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.stringParameters">stringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList">DataAwsccQuicksightAnalysisParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParameters">DataAwsccQuicksightAnalysisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateTimeParameters`<sup>Required</sup> <a name="dateTimeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.dateTimeParameters"></a>

```typescript
public readonly dateTimeParameters: DataAwsccQuicksightAnalysisParametersDateTimeParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDateTimeParametersList">DataAwsccQuicksightAnalysisParametersDateTimeParametersList</a>

---

##### `decimalParameters`<sup>Required</sup> <a name="decimalParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.decimalParameters"></a>

```typescript
public readonly decimalParameters: DataAwsccQuicksightAnalysisParametersDecimalParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersDecimalParametersList">DataAwsccQuicksightAnalysisParametersDecimalParametersList</a>

---

##### `integerParameters`<sup>Required</sup> <a name="integerParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.integerParameters"></a>

```typescript
public readonly integerParameters: DataAwsccQuicksightAnalysisParametersIntegerParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersIntegerParametersList">DataAwsccQuicksightAnalysisParametersIntegerParametersList</a>

---

##### `stringParameters`<sup>Required</sup> <a name="stringParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.stringParameters"></a>

```typescript
public readonly stringParameters: DataAwsccQuicksightAnalysisParametersStringParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList">DataAwsccQuicksightAnalysisParametersStringParametersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParameters">DataAwsccQuicksightAnalysisParameters</a>

---


### DataAwsccQuicksightAnalysisParametersStringParametersList <a name="DataAwsccQuicksightAnalysisParametersStringParametersList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightAnalysisParametersStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightAnalysisParametersStringParametersOutputReference <a name="DataAwsccQuicksightAnalysisParametersStringParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParameters">DataAwsccQuicksightAnalysisParametersStringParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisParametersStringParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisParametersStringParameters">DataAwsccQuicksightAnalysisParametersStringParameters</a>

---


### DataAwsccQuicksightAnalysisPermissionsList <a name="DataAwsccQuicksightAnalysisPermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightAnalysisPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightAnalysisPermissionsOutputReference <a name="DataAwsccQuicksightAnalysisPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissions">DataAwsccQuicksightAnalysisPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisPermissions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisPermissions">DataAwsccQuicksightAnalysisPermissions</a>

---


### DataAwsccQuicksightAnalysisSheetsList <a name="DataAwsccQuicksightAnalysisSheetsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightAnalysisSheetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightAnalysisSheetsOutputReference <a name="DataAwsccQuicksightAnalysisSheetsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.sheetId">sheetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheets">DataAwsccQuicksightAnalysisSheets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sheetId`<sup>Required</sup> <a name="sheetId" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.sheetId"></a>

```typescript
public readonly sheetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisSheets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSheets">DataAwsccQuicksightAnalysisSheets</a>

---


### DataAwsccQuicksightAnalysisSourceEntityOutputReference <a name="DataAwsccQuicksightAnalysisSourceEntityOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntity">DataAwsccQuicksightAnalysisSourceEntity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceTemplate`<sup>Required</sup> <a name="sourceTemplate" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate"></a>

```typescript
public readonly sourceTemplate: DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisSourceEntity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntity">DataAwsccQuicksightAnalysisSourceEntity</a>

---


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```typescript
public readonly dataSetPlaceholder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences</a>

---


### DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference <a name="DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences">dataSetReferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate">DataAwsccQuicksightAnalysisSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```typescript
public readonly dataSetReferences: DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisSourceEntitySourceTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate">DataAwsccQuicksightAnalysisSourceEntitySourceTemplate</a>

---


### DataAwsccQuicksightAnalysisTagsList <a name="DataAwsccQuicksightAnalysisTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightAnalysisTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightAnalysisTagsOutputReference <a name="DataAwsccQuicksightAnalysisTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightAnalysis } from '@cdktn/provider-awscc'

new dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTags">DataAwsccQuicksightAnalysisTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightAnalysisTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAnalysis.DataAwsccQuicksightAnalysisTags">DataAwsccQuicksightAnalysisTags</a>

---



