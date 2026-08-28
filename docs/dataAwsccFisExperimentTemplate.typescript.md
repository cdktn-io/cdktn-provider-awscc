# `dataAwsccFisExperimentTemplate` Submodule <a name="`dataAwsccFisExperimentTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFisExperimentTemplate <a name="DataAwsccFisExperimentTemplate" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/fis_experiment_template awscc_fis_experiment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate(scope: Construct, id: string, config: DataAwsccFisExperimentTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig">DataAwsccFisExperimentTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig">DataAwsccFisExperimentTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFisExperimentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isConstruct"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccFisExperimentTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccFisExperimentTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccFisExperimentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/fis_experiment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFisExperimentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap">DataAwsccFisExperimentTemplateActionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentOptions">experimentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference">DataAwsccFisExperimentTemplateExperimentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentReportConfiguration">experimentReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentTemplateId">experimentTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.stopConditions">stopConditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList">DataAwsccFisExperimentTemplateStopConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap">DataAwsccFisExperimentTemplateTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.actions"></a>

```typescript
public readonly actions: DataAwsccFisExperimentTemplateActionsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap">DataAwsccFisExperimentTemplateActionsMap</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `experimentOptions`<sup>Required</sup> <a name="experimentOptions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentOptions"></a>

```typescript
public readonly experimentOptions: DataAwsccFisExperimentTemplateExperimentOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference">DataAwsccFisExperimentTemplateExperimentOptionsOutputReference</a>

---

##### `experimentReportConfiguration`<sup>Required</sup> <a name="experimentReportConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentReportConfiguration"></a>

```typescript
public readonly experimentReportConfiguration: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference</a>

---

##### `experimentTemplateId`<sup>Required</sup> <a name="experimentTemplateId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentTemplateId"></a>

```typescript
public readonly experimentTemplateId: string;
```

- *Type:* string

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: DataAwsccFisExperimentTemplateLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stopConditions`<sup>Required</sup> <a name="stopConditions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.stopConditions"></a>

```typescript
public readonly stopConditions: DataAwsccFisExperimentTemplateStopConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList">DataAwsccFisExperimentTemplateStopConditionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.targets"></a>

```typescript
public readonly targets: DataAwsccFisExperimentTemplateTargetsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap">DataAwsccFisExperimentTemplateTargetsMap</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFisExperimentTemplateActions <a name="DataAwsccFisExperimentTemplateActions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActions.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateActions: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActions = { ... }
```


### DataAwsccFisExperimentTemplateConfig <a name="DataAwsccFisExperimentTemplateConfig" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateConfig: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/fis_experiment_template#id DataAwsccFisExperimentTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFisExperimentTemplateExperimentOptions <a name="DataAwsccFisExperimentTemplateExperimentOptions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptions.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateExperimentOptions: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptions = { ... }
```


### DataAwsccFisExperimentTemplateExperimentReportConfiguration <a name="DataAwsccFisExperimentTemplateExperimentReportConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateExperimentReportConfiguration: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration = { ... }
```


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources = { ... }
```


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards = { ... }
```


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs = { ... }
```


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration = { ... }
```


### DataAwsccFisExperimentTemplateLogConfiguration <a name="DataAwsccFisExperimentTemplateLogConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfiguration.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateLogConfiguration: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfiguration = { ... }
```


### DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration <a name="DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration = { ... }
```


### DataAwsccFisExperimentTemplateLogConfigurationS3Configuration <a name="DataAwsccFisExperimentTemplateLogConfigurationS3Configuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateLogConfigurationS3Configuration: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration = { ... }
```


### DataAwsccFisExperimentTemplateStopConditions <a name="DataAwsccFisExperimentTemplateStopConditions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditions.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateStopConditions: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditions = { ... }
```


### DataAwsccFisExperimentTemplateTargets <a name="DataAwsccFisExperimentTemplateTargets" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargets.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateTargets: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargets = { ... }
```


### DataAwsccFisExperimentTemplateTargetsFilters <a name="DataAwsccFisExperimentTemplateTargetsFilters" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFilters.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

const dataAwsccFisExperimentTemplateTargetsFilters: dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFilters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFisExperimentTemplateActionsMap <a name="DataAwsccFisExperimentTemplateActionsMap" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.get"></a>

```typescript
public get(key: string): DataAwsccFisExperimentTemplateActionsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFisExperimentTemplateActionsOutputReference <a name="DataAwsccFisExperimentTemplateActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.startAfter">startAfter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.targets">targets</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActions">DataAwsccFisExperimentTemplateActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `startAfter`<sup>Required</sup> <a name="startAfter" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.startAfter"></a>

```typescript
public readonly startAfter: string[];
```

- *Type:* string[]

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.targets"></a>

```typescript
public readonly targets: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActions">DataAwsccFisExperimentTemplateActions</a>

---


### DataAwsccFisExperimentTemplateExperimentOptionsOutputReference <a name="DataAwsccFisExperimentTemplateExperimentOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting">accountTargeting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode">emptyTargetResolutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptions">DataAwsccFisExperimentTemplateExperimentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountTargeting`<sup>Required</sup> <a name="accountTargeting" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting"></a>

```typescript
public readonly accountTargeting: string;
```

- *Type:* string

---

##### `emptyTargetResolutionMode`<sup>Required</sup> <a name="emptyTargetResolutionMode" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode"></a>

```typescript
public readonly emptyTargetResolutionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateExperimentOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptions">DataAwsccFisExperimentTemplateExperimentOptions</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get"></a>

```typescript
public get(index: number): DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier">dashboardIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashboardIdentifier`<sup>Required</sup> <a name="dashboardIdentifier" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier"></a>

```typescript
public readonly dashboardIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards">cloudwatchDashboards</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchDashboards`<sup>Required</sup> <a name="cloudwatchDashboards" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards"></a>

```typescript
public readonly cloudwatchDashboards: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration">postExperimentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration">preExperimentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration">DataAwsccFisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources"></a>

```typescript
public readonly dataSources: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs"></a>

```typescript
public readonly outputs: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a>

---

##### `postExperimentDuration`<sup>Required</sup> <a name="postExperimentDuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration"></a>

```typescript
public readonly postExperimentDuration: string;
```

- *Type:* string

---

##### `preExperimentDuration`<sup>Required</sup> <a name="preExperimentDuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration"></a>

```typescript
public readonly preExperimentDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateExperimentReportConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration">DataAwsccFisExperimentTemplateExperimentReportConfiguration</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration">experimentReportS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `experimentReportS3Configuration`<sup>Required</sup> <a name="experimentReportS3Configuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration"></a>

```typescript
public readonly experimentReportS3Configuration: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs</a>

---


### DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---


### DataAwsccFisExperimentTemplateLogConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion">logSchemaVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfiguration">DataAwsccFisExperimentTemplateLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsConfiguration`<sup>Required</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration"></a>

```typescript
public readonly cloudwatchLogsConfiguration: DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a>

---

##### `logSchemaVersion`<sup>Required</sup> <a name="logSchemaVersion" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion"></a>

```typescript
public readonly logSchemaVersion: number;
```

- *Type:* number

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateLogConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfiguration">DataAwsccFisExperimentTemplateLogConfiguration</a>

---


### DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration">DataAwsccFisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateLogConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration">DataAwsccFisExperimentTemplateLogConfigurationS3Configuration</a>

---


### DataAwsccFisExperimentTemplateStopConditionsList <a name="DataAwsccFisExperimentTemplateStopConditionsList" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.get"></a>

```typescript
public get(index: number): DataAwsccFisExperimentTemplateStopConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFisExperimentTemplateStopConditionsOutputReference <a name="DataAwsccFisExperimentTemplateStopConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditions">DataAwsccFisExperimentTemplateStopConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateStopConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditions">DataAwsccFisExperimentTemplateStopConditions</a>

---


### DataAwsccFisExperimentTemplateTargetsFiltersList <a name="DataAwsccFisExperimentTemplateTargetsFiltersList" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccFisExperimentTemplateTargetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFisExperimentTemplateTargetsFiltersOutputReference <a name="DataAwsccFisExperimentTemplateTargetsFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFilters">DataAwsccFisExperimentTemplateTargetsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateTargetsFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFilters">DataAwsccFisExperimentTemplateTargetsFilters</a>

---


### DataAwsccFisExperimentTemplateTargetsMap <a name="DataAwsccFisExperimentTemplateTargetsMap" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.get"></a>

```typescript
public get(key: string): DataAwsccFisExperimentTemplateTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFisExperimentTemplateTargetsOutputReference <a name="DataAwsccFisExperimentTemplateTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFisExperimentTemplate } from '@cdktn/provider-awscc'

new dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList">DataAwsccFisExperimentTemplateTargetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceTags">resourceTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.selectionMode">selectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargets">DataAwsccFisExperimentTemplateTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.filters"></a>

```typescript
public readonly filters: DataAwsccFisExperimentTemplateTargetsFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList">DataAwsccFisExperimentTemplateTargetsFiltersList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceTags"></a>

```typescript
public readonly resourceTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `selectionMode`<sup>Required</sup> <a name="selectionMode" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.selectionMode"></a>

```typescript
public readonly selectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFisExperimentTemplateTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargets">DataAwsccFisExperimentTemplateTargets</a>

---



