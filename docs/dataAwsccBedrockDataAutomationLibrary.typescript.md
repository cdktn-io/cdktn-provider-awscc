# `dataAwsccBedrockDataAutomationLibrary` Submodule <a name="`dataAwsccBedrockDataAutomationLibrary` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockDataAutomationLibrary <a name="DataAwsccBedrockDataAutomationLibrary" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_data_automation_library awscc_bedrock_data_automation_library}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

new dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary(scope: Construct, id: string, config: DataAwsccBedrockDataAutomationLibraryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig">DataAwsccBedrockDataAutomationLibraryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig">DataAwsccBedrockDataAutomationLibraryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockDataAutomationLibrary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isConstruct"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockDataAutomationLibrary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockDataAutomationLibrary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockDataAutomationLibrary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_data_automation_library#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockDataAutomationLibrary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference">DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList">DataAwsccBedrockDataAutomationLibraryEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.libraryArn">libraryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.libraryDescription">libraryDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.libraryName">libraryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList">DataAwsccBedrockDataAutomationLibraryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference">DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference</a>

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.entityTypes"></a>

```typescript
public readonly entityTypes: DataAwsccBedrockDataAutomationLibraryEntityTypesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList">DataAwsccBedrockDataAutomationLibraryEntityTypesList</a>

---

##### `libraryArn`<sup>Required</sup> <a name="libraryArn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.libraryArn"></a>

```typescript
public readonly libraryArn: string;
```

- *Type:* string

---

##### `libraryDescription`<sup>Required</sup> <a name="libraryDescription" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.libraryDescription"></a>

```typescript
public readonly libraryDescription: string;
```

- *Type:* string

---

##### `libraryName`<sup>Required</sup> <a name="libraryName" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.libraryName"></a>

```typescript
public readonly libraryName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockDataAutomationLibraryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList">DataAwsccBedrockDataAutomationLibraryTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibrary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockDataAutomationLibraryConfig <a name="DataAwsccBedrockDataAutomationLibraryConfig" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

const dataAwsccBedrockDataAutomationLibraryConfig: dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_data_automation_library#id DataAwsccBedrockDataAutomationLibrary#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration <a name="DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

const dataAwsccBedrockDataAutomationLibraryEncryptionConfiguration: dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration = { ... }
```


### DataAwsccBedrockDataAutomationLibraryEntityTypes <a name="DataAwsccBedrockDataAutomationLibraryEntityTypes" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypes.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

const dataAwsccBedrockDataAutomationLibraryEntityTypes: dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypes = { ... }
```


### DataAwsccBedrockDataAutomationLibraryTags <a name="DataAwsccBedrockDataAutomationLibraryTags" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTags.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

const dataAwsccBedrockDataAutomationLibraryTags: dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference <a name="DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

new dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContext">kmsEncryptionContext</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration">DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsEncryptionContext`<sup>Required</sup> <a name="kmsEncryptionContext" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContext"></a>

```typescript
public readonly kmsEncryptionContext: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration">DataAwsccBedrockDataAutomationLibraryEncryptionConfiguration</a>

---


### DataAwsccBedrockDataAutomationLibraryEntityTypesList <a name="DataAwsccBedrockDataAutomationLibraryEntityTypesList" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

new dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference <a name="DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

new dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.entityMetadata">entityMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypes">DataAwsccBedrockDataAutomationLibraryEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityMetadata`<sup>Required</sup> <a name="entityMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.entityMetadata"></a>

```typescript
public readonly entityMetadata: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockDataAutomationLibraryEntityTypes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryEntityTypes">DataAwsccBedrockDataAutomationLibraryEntityTypes</a>

---


### DataAwsccBedrockDataAutomationLibraryTagsList <a name="DataAwsccBedrockDataAutomationLibraryTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

new dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockDataAutomationLibraryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockDataAutomationLibraryTagsOutputReference <a name="DataAwsccBedrockDataAutomationLibraryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockDataAutomationLibrary } from '@cdktn/provider-awscc'

new dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTags">DataAwsccBedrockDataAutomationLibraryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockDataAutomationLibraryTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockDataAutomationLibrary.DataAwsccBedrockDataAutomationLibraryTags">DataAwsccBedrockDataAutomationLibraryTags</a>

---



