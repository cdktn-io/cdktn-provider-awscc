# `dataAwsccSagemakerHumanTaskUi` Submodule <a name="`dataAwsccSagemakerHumanTaskUi` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerHumanTaskUi <a name="DataAwsccSagemakerHumanTaskUi" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_human_task_ui awscc_sagemaker_human_task_ui}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.Initializer"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

new dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi(scope: Construct, id: string, config: DataAwsccSagemakerHumanTaskUiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig">DataAwsccSagemakerHumanTaskUiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig">DataAwsccSagemakerHumanTaskUiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerHumanTaskUi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isConstruct"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerHumanTaskUi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerHumanTaskUi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerHumanTaskUi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_human_task_ui#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerHumanTaskUi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.humanTaskUiName">humanTaskUiName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList">DataAwsccSagemakerHumanTaskUiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.uiTemplate">uiTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference">DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `humanTaskUiArn`<sup>Required</sup> <a name="humanTaskUiArn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.humanTaskUiArn"></a>

```typescript
public readonly humanTaskUiArn: string;
```

- *Type:* string

---

##### `humanTaskUiName`<sup>Required</sup> <a name="humanTaskUiName" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.humanTaskUiName"></a>

```typescript
public readonly humanTaskUiName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerHumanTaskUiTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList">DataAwsccSagemakerHumanTaskUiTagsList</a>

---

##### `uiTemplate`<sup>Required</sup> <a name="uiTemplate" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.uiTemplate"></a>

```typescript
public readonly uiTemplate: DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference">DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerHumanTaskUiConfig <a name="DataAwsccSagemakerHumanTaskUiConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

const dataAwsccSagemakerHumanTaskUiConfig: dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_human_task_ui#id DataAwsccSagemakerHumanTaskUi#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerHumanTaskUiTags <a name="DataAwsccSagemakerHumanTaskUiTags" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

const dataAwsccSagemakerHumanTaskUiTags: dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTags = { ... }
```


### DataAwsccSagemakerHumanTaskUiUiTemplate <a name="DataAwsccSagemakerHumanTaskUiUiTemplate" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplate.Initializer"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

const dataAwsccSagemakerHumanTaskUiUiTemplate: dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplate = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerHumanTaskUiTagsList <a name="DataAwsccSagemakerHumanTaskUiTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

new dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerHumanTaskUiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerHumanTaskUiTagsOutputReference <a name="DataAwsccSagemakerHumanTaskUiTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

new dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTags">DataAwsccSagemakerHumanTaskUiTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerHumanTaskUiTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiTags">DataAwsccSagemakerHumanTaskUiTags</a>

---


### DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference <a name="DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerHumanTaskUi } from '@cdktn/provider-awscc'

new dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplate">DataAwsccSagemakerHumanTaskUiUiTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerHumanTaskUiUiTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerHumanTaskUi.DataAwsccSagemakerHumanTaskUiUiTemplate">DataAwsccSagemakerHumanTaskUiUiTemplate</a>

---



