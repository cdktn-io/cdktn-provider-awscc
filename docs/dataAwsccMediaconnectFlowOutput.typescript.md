# `dataAwsccMediaconnectFlowOutput` Submodule <a name="`dataAwsccMediaconnectFlowOutput` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectFlowOutput <a name="DataAwsccMediaconnectFlowOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_flow_output awscc_mediaconnect_flow_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput(scope: Construct, id: string, config: DataAwsccMediaconnectFlowOutputConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig">DataAwsccMediaconnectFlowOutputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig">DataAwsccMediaconnectFlowOutputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectFlowOutput resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isConstruct"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformElement"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediaconnectFlowOutput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconnectFlowOutput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconnectFlowOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_flow_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectFlowOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.cidrAllowList">cidrAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference">DataAwsccMediaconnectFlowOutputEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.maxLatency">maxLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.mediaStreamOutputConfigurations">mediaStreamOutputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.minLatency">minLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiOutputTimecodeSource">ndiOutputTimecodeSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiProgramName">ndiProgramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiSpeedHqQuality">ndiSpeedHqQuality</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.outputArn">outputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.outputStatus">outputStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.remoteId">remoteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.routerIntegrationState">routerIntegrationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.routerIntegrationTransitEncryption">routerIntegrationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.smoothingLatency">smoothingLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList">DataAwsccMediaconnectFlowOutputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.vpcInterfaceAttachment">vpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cidrAllowList`<sup>Required</sup> <a name="cidrAllowList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.cidrAllowList"></a>

```typescript
public readonly cidrAllowList: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.encryption"></a>

```typescript
public readonly encryption: DataAwsccMediaconnectFlowOutputEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference">DataAwsccMediaconnectFlowOutputEncryptionOutputReference</a>

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `maxLatency`<sup>Required</sup> <a name="maxLatency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.maxLatency"></a>

```typescript
public readonly maxLatency: number;
```

- *Type:* number

---

##### `mediaStreamOutputConfigurations`<sup>Required</sup> <a name="mediaStreamOutputConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.mediaStreamOutputConfigurations"></a>

```typescript
public readonly mediaStreamOutputConfigurations: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList</a>

---

##### `minLatency`<sup>Required</sup> <a name="minLatency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.minLatency"></a>

```typescript
public readonly minLatency: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ndiOutputTimecodeSource`<sup>Required</sup> <a name="ndiOutputTimecodeSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiOutputTimecodeSource"></a>

```typescript
public readonly ndiOutputTimecodeSource: string;
```

- *Type:* string

---

##### `ndiProgramName`<sup>Required</sup> <a name="ndiProgramName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiProgramName"></a>

```typescript
public readonly ndiProgramName: string;
```

- *Type:* string

---

##### `ndiSpeedHqQuality`<sup>Required</sup> <a name="ndiSpeedHqQuality" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.ndiSpeedHqQuality"></a>

```typescript
public readonly ndiSpeedHqQuality: number;
```

- *Type:* number

---

##### `outputArn`<sup>Required</sup> <a name="outputArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.outputArn"></a>

```typescript
public readonly outputArn: string;
```

- *Type:* string

---

##### `outputStatus`<sup>Required</sup> <a name="outputStatus" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.outputStatus"></a>

```typescript
public readonly outputStatus: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `remoteId`<sup>Required</sup> <a name="remoteId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.remoteId"></a>

```typescript
public readonly remoteId: string;
```

- *Type:* string

---

##### `routerIntegrationState`<sup>Required</sup> <a name="routerIntegrationState" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.routerIntegrationState"></a>

```typescript
public readonly routerIntegrationState: string;
```

- *Type:* string

---

##### `routerIntegrationTransitEncryption`<sup>Required</sup> <a name="routerIntegrationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.routerIntegrationTransitEncryption"></a>

```typescript
public readonly routerIntegrationTransitEncryption: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference</a>

---

##### `smoothingLatency`<sup>Required</sup> <a name="smoothingLatency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.smoothingLatency"></a>

```typescript
public readonly smoothingLatency: number;
```

- *Type:* number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.tags"></a>

```typescript
public readonly tags: DataAwsccMediaconnectFlowOutputTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList">DataAwsccMediaconnectFlowOutputTagsList</a>

---

##### `vpcInterfaceAttachment`<sup>Required</sup> <a name="vpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.vpcInterfaceAttachment"></a>

```typescript
public readonly vpcInterfaceAttachment: DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutput.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectFlowOutputConfig <a name="DataAwsccMediaconnectFlowOutputConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputConfig: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_flow_output#id DataAwsccMediaconnectFlowOutput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectFlowOutputEncryption <a name="DataAwsccMediaconnectFlowOutputEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputEncryption: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption = { ... }
```


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations = { ... }
```


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations = { ... }
```


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface = { ... }
```


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters = { ... }
```


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption = { ... }
```


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration = { ... }
```


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager = { ... }
```


### DataAwsccMediaconnectFlowOutputTags <a name="DataAwsccMediaconnectFlowOutputTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputTags: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags = { ... }
```


### DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment <a name="DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectFlowOutputVpcInterfaceAttachment: dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectFlowOutputEncryptionOutputReference <a name="DataAwsccMediaconnectFlowOutputEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption">DataAwsccMediaconnectFlowOutputEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputEncryption">DataAwsccMediaconnectFlowOutputEncryption</a>

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a>

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIp">destinationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPort">destinationPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationIp`<sup>Required</sup> <a name="destinationIp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIp"></a>

```typescript
public readonly destinationIp: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interface"></a>

```typescript
public readonly interface: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactor">compressionFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfile">encoderProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionFactor`<sup>Required</sup> <a name="compressionFactor" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactor"></a>

```typescript
public readonly compressionFactor: number;
```

- *Type:* number

---

##### `encoderProfile`<sup>Required</sup> <a name="encoderProfile" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfile"></a>

```typescript
public readonly encoderProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a>

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference <a name="DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurations">destinationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingName">encodingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParameters">encodingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationConfigurations`<sup>Required</sup> <a name="destinationConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurations"></a>

```typescript
public readonly destinationConfigurations: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList</a>

---

##### `encodingName`<sup>Required</sup> <a name="encodingName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingName"></a>

```typescript
public readonly encodingName: string;
```

- *Type:* string

---

##### `encodingParameters`<sup>Required</sup> <a name="encodingParameters" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParameters"></a>

```typescript
public readonly encodingParameters: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference</a>

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations">DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations</a>

---


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```typescript
public readonly automatic: string;
```

- *Type:* string

---

##### `secretsManager`<sup>Required</sup> <a name="secretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```typescript
public readonly secretsManager: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference <a name="DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">encryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyType">encryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKeyConfiguration`<sup>Required</sup> <a name="encryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```typescript
public readonly encryptionKeyConfiguration: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryptionKeyType`<sup>Required</sup> <a name="encryptionKeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```typescript
public readonly encryptionKeyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption">DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

---


### DataAwsccMediaconnectFlowOutputTagsList <a name="DataAwsccMediaconnectFlowOutputTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconnectFlowOutputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconnectFlowOutputTagsOutputReference <a name="DataAwsccMediaconnectFlowOutputTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags">DataAwsccMediaconnectFlowOutputTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputTags">DataAwsccMediaconnectFlowOutputTags</a>

---


### DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference <a name="DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectFlowOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment">DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowOutput.DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment">DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment</a>

---



