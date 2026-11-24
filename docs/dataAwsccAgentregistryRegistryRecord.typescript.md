# `dataAwsccAgentregistryRegistryRecord` Submodule <a name="`dataAwsccAgentregistryRegistryRecord` Submodule" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAgentregistryRegistryRecord <a name="DataAwsccAgentregistryRegistryRecord" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/agentregistry_registry_record awscc_agentregistry_registry_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord(scope: Construct, id: string, config: DataAwsccAgentregistryRegistryRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig">DataAwsccAgentregistryRegistryRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig">DataAwsccAgentregistryRegistryRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAgentregistryRegistryRecord resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isConstruct"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isTerraformElement"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isTerraformDataSource"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.generateConfigForImport"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAgentregistryRegistryRecord resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAgentregistryRegistryRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAgentregistryRegistryRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/agentregistry_registry_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAgentregistryRegistryRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.artifact">artifact</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference">DataAwsccAgentregistryRegistryRecordArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.customMetadata">customMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.descriptors">descriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.recordArn">recordArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.recordId">recordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.recordType">recordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.recordVersion">recordVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.registryArn">registryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.synchronizedSource">synchronizedSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference">DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList">DataAwsccAgentregistryRegistryRecordTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.artifact"></a>

```typescript
public readonly artifact: DataAwsccAgentregistryRegistryRecordArtifactOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference">DataAwsccAgentregistryRegistryRecordArtifactOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.customMetadata"></a>

```typescript
public readonly customMetadata: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `descriptors`<sup>Required</sup> <a name="descriptors" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.descriptors"></a>

```typescript
public readonly descriptors: DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recordArn`<sup>Required</sup> <a name="recordArn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.recordArn"></a>

```typescript
public readonly recordArn: string;
```

- *Type:* string

---

##### `recordId`<sup>Required</sup> <a name="recordId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.recordId"></a>

```typescript
public readonly recordId: string;
```

- *Type:* string

---

##### `recordType`<sup>Required</sup> <a name="recordType" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.recordType"></a>

```typescript
public readonly recordType: string;
```

- *Type:* string

---

##### `recordVersion`<sup>Required</sup> <a name="recordVersion" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.recordVersion"></a>

```typescript
public readonly recordVersion: string;
```

- *Type:* string

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `synchronizedSource`<sup>Required</sup> <a name="synchronizedSource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.synchronizedSource"></a>

```typescript
public readonly synchronizedSource: DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference">DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.tags"></a>

```typescript
public readonly tags: DataAwsccAgentregistryRegistryRecordTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList">DataAwsccAgentregistryRegistryRecordTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAgentregistryRegistryRecordArtifact <a name="DataAwsccAgentregistryRegistryRecordArtifact" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifact.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordArtifact: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifact = { ... }
```


### DataAwsccAgentregistryRegistryRecordConfig <a name="DataAwsccAgentregistryRegistryRecordConfig" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordConfig: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/agentregistry_registry_record#id DataAwsccAgentregistryRegistryRecord#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAgentregistryRegistryRecordDescriptors <a name="DataAwsccAgentregistryRegistryRecordDescriptors" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptors.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptors: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptors = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3 <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3 = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAgui <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgui" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgui"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgui.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAgui: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgui = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAguiSource: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsCustom <a name="DataAwsccAgentregistryRegistryRecordDescriptorsCustom" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustom.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsCustom: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustom = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsHttp <a name="DataAwsccAgentregistryRegistryRecordDescriptorsHttp" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttp.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsHttp: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttp = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource <a name="DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsHttpSource: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl <a name="DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsMcpServer: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider = { ... }
```


### DataAwsccAgentregistryRegistryRecordSynchronizedSource <a name="DataAwsccAgentregistryRegistryRecordSynchronizedSource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSource.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordSynchronizedSource: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSource = { ... }
```


### DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3 <a name="DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordSynchronizedSourceS3: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3 = { ... }
```


### DataAwsccAgentregistryRegistryRecordTags <a name="DataAwsccAgentregistryRegistryRecordTags" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTags.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

const dataAwsccAgentregistryRegistryRecordTags: dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAgentregistryRegistryRecordArtifactOutputReference <a name="DataAwsccAgentregistryRegistryRecordArtifactOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifact">DataAwsccAgentregistryRegistryRecordArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordArtifact;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordArtifact">DataAwsccAgentregistryRegistryRecordArtifact</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.dataSchemaVersion">dataSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `dataSchemaVersion`<sup>Required</sup> <a name="dataSchemaVersion" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.dataSchemaVersion"></a>

```typescript
public readonly dataSchemaVersion: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCard</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.customParameters">customParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.grantType">grantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.providerArn">providerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customParameters`<sup>Required</sup> <a name="customParameters" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.customParameters"></a>

```typescript
public readonly customParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

---

##### `providerArn`<sup>Required</sup> <a name="providerArn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.providerArn"></a>

```typescript
public readonly providerArn: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.iamCredentialProvider">iamCredentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.oauthCredentialProvider">oauthCredentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamCredentialProvider`<sup>Required</sup> <a name="iamCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.iamCredentialProvider"></a>

```typescript
public readonly iamCredentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference</a>

---

##### `oauthCredentialProvider`<sup>Required</sup> <a name="oauthCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.oauthCredentialProvider"></a>

```typescript
public readonly oauthCredentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProvider">credentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProviderType">credentialProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProvider`<sup>Required</sup> <a name="credentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProvider"></a>

```typescript
public readonly credentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference</a>

---

##### `credentialProviderType`<sup>Required</sup> <a name="credentialProviderType" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProviderType"></a>

```typescript
public readonly credentialProviderType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.credentialProviderConfigurations"></a>

```typescript
public readonly credentialProviderConfigurations: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.property.fromUrl">fromUrl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromUrl`<sup>Required</sup> <a name="fromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.property.fromUrl"></a>

```typescript
public readonly fromUrl: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardSource</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.skillMd">skillMd</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.skillPackage">skillPackage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skillMd`<sup>Required</sup> <a name="skillMd" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.skillMd"></a>

```typescript
public readonly skillMd: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference</a>

---

##### `skillPackage`<sup>Required</sup> <a name="skillPackage" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.skillPackage"></a>

```typescript
public readonly skillPackage: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference</a>

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.sourceConfiguration"></a>

```typescript
public readonly sourceConfiguration: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.dataSchemaVersion">dataSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `dataSchemaVersion`<sup>Required</sup> <a name="dataSchemaVersion" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.dataSchemaVersion"></a>

```typescript
public readonly dataSchemaVersion: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.iamCredentialProvider">iamCredentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamCredentialProvider`<sup>Required</sup> <a name="iamCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.iamCredentialProvider"></a>

```typescript
public readonly iamCredentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProvider">credentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProviderType">credentialProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProvider`<sup>Required</sup> <a name="credentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProvider"></a>

```typescript
public readonly credentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference</a>

---

##### `credentialProviderType`<sup>Required</sup> <a name="credentialProviderType" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProviderType"></a>

```typescript
public readonly credentialProviderType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurations</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.credentialProviderConfigurations"></a>

```typescript
public readonly credentialProviderConfigurations: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlCredentialProviderConfigurationsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.property.fromUrl">fromUrl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromUrl`<sup>Required</sup> <a name="fromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.property.fromUrl"></a>

```typescript
public readonly fromUrl: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackage</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.iamCredentialProvider">iamCredentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamCredentialProvider`<sup>Required</sup> <a name="iamCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.iamCredentialProvider"></a>

```typescript
public readonly iamCredentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProvider">credentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProviderType">credentialProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProvider`<sup>Required</sup> <a name="credentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProvider"></a>

```typescript
public readonly credentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference</a>

---

##### `credentialProviderType`<sup>Required</sup> <a name="credentialProviderType" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProviderType"></a>

```typescript
public readonly credentialProviderType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurations</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.credentialProviderConfigurations"></a>

```typescript
public readonly credentialProviderConfigurations: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlCredentialProviderConfigurationsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrl</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.property.fromUrl">fromUrl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromUrl`<sup>Required</sup> <a name="fromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.property.fromUrl"></a>

```typescript
public readonly fromUrl: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceFromUrlOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillPackageSource</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfiguration</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.property.bucketOwnerAccountId">bucketOwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketOwnerAccountId`<sup>Required</sup> <a name="bucketOwnerAccountId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.property.bucketOwnerAccountId"></a>

```typescript
public readonly bucketOwnerAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSourceConfigurationS3</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.additionalData">additionalData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.dataSchemaVersion">dataSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalData`<sup>Required</sup> <a name="additionalData" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.additionalData"></a>

```typescript
public readonly additionalData: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `dataSchemaVersion`<sup>Required</sup> <a name="dataSchemaVersion" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.dataSchemaVersion"></a>

```typescript
public readonly dataSchemaVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinition</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgui">DataAwsccAgentregistryRegistryRecordDescriptorsAgui</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAgui;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgui">DataAwsccAgentregistryRegistryRecordDescriptorsAgui</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrl</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.property.fromUrl">fromUrl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource">DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromUrl`<sup>Required</sup> <a name="fromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.property.fromUrl"></a>

```typescript
public readonly fromUrl: DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceFromUrlOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource">DataAwsccAgentregistryRegistryRecordDescriptorsAguiSource</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustom">DataAwsccAgentregistryRegistryRecordDescriptorsCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsCustom;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustom">DataAwsccAgentregistryRegistryRecordDescriptorsCustom</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttp">DataAwsccAgentregistryRegistryRecordDescriptorsHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsHttp;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttp">DataAwsccAgentregistryRegistryRecordDescriptorsHttp</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrl</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.property.fromUrl">fromUrl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource">DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromUrl`<sup>Required</sup> <a name="fromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.property.fromUrl"></a>

```typescript
public readonly fromUrl: DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceFromUrlOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource">DataAwsccAgentregistryRegistryRecordDescriptorsHttpSource</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.property.tools"></a>

```typescript
public readonly tools: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalData</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.dataSchemaVersion">dataSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `dataSchemaVersion`<sup>Required</sup> <a name="dataSchemaVersion" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.dataSchemaVersion"></a>

```typescript
public readonly dataSchemaVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.additionalData">additionalData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.dataSchemaVersion">dataSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalData`<sup>Required</sup> <a name="additionalData" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.additionalData"></a>

```typescript
public readonly additionalData: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `dataSchemaVersion`<sup>Required</sup> <a name="dataSchemaVersion" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.dataSchemaVersion"></a>

```typescript
public readonly dataSchemaVersion: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServer</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.customParameters">customParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.grantType">grantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.providerArn">providerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customParameters`<sup>Required</sup> <a name="customParameters" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.customParameters"></a>

```typescript
public readonly customParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

---

##### `providerArn`<sup>Required</sup> <a name="providerArn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.providerArn"></a>

```typescript
public readonly providerArn: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.iamCredentialProvider">iamCredentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.oauthCredentialProvider">oauthCredentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamCredentialProvider`<sup>Required</sup> <a name="iamCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.iamCredentialProvider"></a>

```typescript
public readonly iamCredentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference</a>

---

##### `oauthCredentialProvider`<sup>Required</sup> <a name="oauthCredentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.oauthCredentialProvider"></a>

```typescript
public readonly oauthCredentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProvider">credentialProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProviderType">credentialProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProvider`<sup>Required</sup> <a name="credentialProvider" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProvider"></a>

```typescript
public readonly credentialProvider: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference</a>

---

##### `credentialProviderType`<sup>Required</sup> <a name="credentialProviderType" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.credentialProviderType"></a>

```typescript
public readonly credentialProviderType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.credentialProviderConfigurations"></a>

```typescript
public readonly credentialProviderConfigurations: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.property.fromUrl">fromUrl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromUrl`<sup>Required</sup> <a name="fromUrl" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.property.fromUrl"></a>

```typescript
public readonly fromUrl: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerSource</a>

---


### DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference <a name="DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.a2AAgentCard">a2AAgentCard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.agentSkillsDefinition">agentSkillsDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.agui">agui</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.http">http</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptors">DataAwsccAgentregistryRegistryRecordDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `a2AAgentCard`<sup>Required</sup> <a name="a2AAgentCard" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.a2AAgentCard"></a>

```typescript
public readonly a2AAgentCard: DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference</a>

---

##### `agentSkillsDefinition`<sup>Required</sup> <a name="agentSkillsDefinition" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.agentSkillsDefinition"></a>

```typescript
public readonly agentSkillsDefinition: DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference</a>

---

##### `agui`<sup>Required</sup> <a name="agui" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.agui"></a>

```typescript
public readonly agui: DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsAguiOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.custom"></a>

```typescript
public readonly custom: DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsCustomOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.http"></a>

```typescript
public readonly http: DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsHttpOutputReference</a>

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.mcpServer"></a>

```typescript
public readonly mcpServer: DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference">DataAwsccAgentregistryRegistryRecordDescriptorsMcpServerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordDescriptors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordDescriptors">DataAwsccAgentregistryRegistryRecordDescriptors</a>

---


### DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference <a name="DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference">DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSource">DataAwsccAgentregistryRegistryRecordSynchronizedSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference">DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordSynchronizedSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSource">DataAwsccAgentregistryRegistryRecordSynchronizedSource</a>

---


### DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference <a name="DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.eTag">eTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.synchronizedAt">synchronizedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3">DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.eTag"></a>

```typescript
public readonly eTag: string;
```

- *Type:* string

---

##### `synchronizedAt`<sup>Required</sup> <a name="synchronizedAt" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.synchronizedAt"></a>

```typescript
public readonly synchronizedAt: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3">DataAwsccAgentregistryRegistryRecordSynchronizedSourceS3</a>

---


### DataAwsccAgentregistryRegistryRecordTagsList <a name="DataAwsccAgentregistryRegistryRecordTagsList" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAgentregistryRegistryRecordTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAgentregistryRegistryRecordTagsOutputReference <a name="DataAwsccAgentregistryRegistryRecordTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAgentregistryRegistryRecord } from '@cdktn/provider-awscc'

new dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTags">DataAwsccAgentregistryRegistryRecordTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAgentregistryRegistryRecordTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAgentregistryRegistryRecord.DataAwsccAgentregistryRegistryRecordTags">DataAwsccAgentregistryRegistryRecordTags</a>

---



