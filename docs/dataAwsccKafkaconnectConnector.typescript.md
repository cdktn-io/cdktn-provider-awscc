# `dataAwsccKafkaconnectConnector` Submodule <a name="`dataAwsccKafkaconnectConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKafkaconnectConnector <a name="DataAwsccKafkaconnectConnector" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/kafkaconnect_connector awscc_kafkaconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector(scope: Construct, id: string, config: DataAwsccKafkaconnectConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig">DataAwsccKafkaconnectConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig">DataAwsccKafkaconnectConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKafkaconnectConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccKafkaconnectConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKafkaconnectConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKafkaconnectConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKafkaconnectConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorConfiguration">connectorConfiguration</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorDescription">connectorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorName">connectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaConnectVersion">kafkaConnectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.plugins">plugins</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList">DataAwsccKafkaconnectConnectorPluginsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList">DataAwsccKafkaconnectConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference">DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.capacity"></a>

```typescript
public readonly capacity: DataAwsccKafkaconnectConnectorCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityOutputReference</a>

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorConfiguration"></a>

```typescript
public readonly connectorConfiguration: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `connectorDescription`<sup>Required</sup> <a name="connectorDescription" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorDescription"></a>

```typescript
public readonly connectorDescription: string;
```

- *Type:* string

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaCluster"></a>

```typescript
public readonly kafkaCluster: DataAwsccKafkaconnectConnectorKafkaClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterOutputReference</a>

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterClientAuthentication"></a>

```typescript
public readonly kafkaClusterClientAuthentication: DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```typescript
public readonly kafkaClusterEncryptionInTransit: DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `kafkaConnectVersion`<sup>Required</sup> <a name="kafkaConnectVersion" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaConnectVersion"></a>

```typescript
public readonly kafkaConnectVersion: string;
```

- *Type:* string

---

##### `logDelivery`<sup>Required</sup> <a name="logDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.logDelivery"></a>

```typescript
public readonly logDelivery: DataAwsccKafkaconnectConnectorLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryOutputReference</a>

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.plugins"></a>

```typescript
public readonly plugins: DataAwsccKafkaconnectConnectorPluginsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList">DataAwsccKafkaconnectConnectorPluginsList</a>

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tags"></a>

```typescript
public readonly tags: DataAwsccKafkaconnectConnectorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList">DataAwsccKafkaconnectConnectorTagsList</a>

---

##### `workerConfiguration`<sup>Required</sup> <a name="workerConfiguration" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.workerConfiguration"></a>

```typescript
public readonly workerConfiguration: DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference">DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKafkaconnectConnectorCapacity <a name="DataAwsccKafkaconnectConnectorCapacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorCapacity: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity = { ... }
```


### DataAwsccKafkaconnectConnectorCapacityAutoScaling <a name="DataAwsccKafkaconnectConnectorCapacityAutoScaling" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorCapacityAutoScaling: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling = { ... }
```


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy = { ... }
```


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy = { ... }
```


### DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity <a name="DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorCapacityProvisionedCapacity: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity = { ... }
```


### DataAwsccKafkaconnectConnectorConfig <a name="DataAwsccKafkaconnectConnectorConfig" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorConfig: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/kafkaconnect_connector#id DataAwsccKafkaconnectConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKafkaconnectConnectorKafkaCluster <a name="DataAwsccKafkaconnectConnectorKafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorKafkaCluster: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster = { ... }
```


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster = { ... }
```


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc = { ... }
```


### DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication <a name="DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication = { ... }
```


### DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit <a name="DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit = { ... }
```


### DataAwsccKafkaconnectConnectorLogDelivery <a name="DataAwsccKafkaconnectConnectorLogDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorLogDelivery: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery = { ... }
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery = { ... }
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs = { ... }
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose = { ... }
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 = { ... }
```


### DataAwsccKafkaconnectConnectorPlugins <a name="DataAwsccKafkaconnectConnectorPlugins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorPlugins: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins = { ... }
```


### DataAwsccKafkaconnectConnectorPluginsCustomPlugin <a name="DataAwsccKafkaconnectConnectorPluginsCustomPlugin" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorPluginsCustomPlugin: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin = { ... }
```


### DataAwsccKafkaconnectConnectorTags <a name="DataAwsccKafkaconnectConnectorTags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorTags: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags = { ... }
```


### DataAwsccKafkaconnectConnectorWorkerConfiguration <a name="DataAwsccKafkaconnectConnectorWorkerConfiguration" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

const dataAwsccKafkaconnectConnectorWorkerConfiguration: dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount">maxAutoscalingTaskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount">maxWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount">mcuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount">minWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy">scaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling">DataAwsccKafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxAutoscalingTaskCount`<sup>Required</sup> <a name="maxAutoscalingTaskCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount"></a>

```typescript
public readonly maxAutoscalingTaskCount: number;
```

- *Type:* number

---

##### `maxWorkerCount`<sup>Required</sup> <a name="maxWorkerCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount"></a>

```typescript
public readonly maxWorkerCount: number;
```

- *Type:* number

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

---

##### `minWorkerCount`<sup>Required</sup> <a name="minWorkerCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount"></a>

```typescript
public readonly minWorkerCount: number;
```

- *Type:* number

---

##### `scaleInPolicy`<sup>Required</sup> <a name="scaleInPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy"></a>

```typescript
public readonly scaleInPolicy: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a>

---

##### `scaleOutPolicy`<sup>Required</sup> <a name="scaleOutPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy"></a>

```typescript
public readonly scaleOutPolicy: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorCapacityAutoScaling;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling">DataAwsccKafkaconnectConnectorCapacityAutoScaling</a>

---


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---


### DataAwsccKafkaconnectConnectorCapacityOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity">provisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity">DataAwsccKafkaconnectConnectorCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.autoScaling"></a>

```typescript
public readonly autoScaling: DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference</a>

---

##### `provisionedCapacity`<sup>Required</sup> <a name="provisionedCapacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```typescript
public readonly provisionedCapacity: DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity">DataAwsccKafkaconnectConnectorCapacity</a>

---


### DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">mcuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">workerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```typescript
public readonly vpc: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster">DataAwsccKafkaconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```typescript
public readonly apacheKafkaCluster: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorKafkaCluster;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster">DataAwsccKafkaconnectConnectorKafkaCluster</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">workerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery">DataAwsccKafkaconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workerLogDelivery`<sup>Required</sup> <a name="workerLogDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```typescript
public readonly workerLogDelivery: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery">DataAwsccKafkaconnectConnectorLogDelivery</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```typescript
public readonly firehose: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference <a name="DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn">customPluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin">DataAwsccKafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customPluginArn`<sup>Required</sup> <a name="customPluginArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn"></a>

```typescript
public readonly customPluginArn: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorPluginsCustomPlugin;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin">DataAwsccKafkaconnectConnectorPluginsCustomPlugin</a>

---


### DataAwsccKafkaconnectConnectorPluginsList <a name="DataAwsccKafkaconnectConnectorPluginsList" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.get"></a>

```typescript
public get(index: number): DataAwsccKafkaconnectConnectorPluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKafkaconnectConnectorPluginsOutputReference <a name="DataAwsccKafkaconnectConnectorPluginsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.customPlugin">customPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference">DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins">DataAwsccKafkaconnectConnectorPlugins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customPlugin`<sup>Required</sup> <a name="customPlugin" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.customPlugin"></a>

```typescript
public readonly customPlugin: DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference">DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorPlugins;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins">DataAwsccKafkaconnectConnectorPlugins</a>

---


### DataAwsccKafkaconnectConnectorTagsList <a name="DataAwsccKafkaconnectConnectorTagsList" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.get"></a>

```typescript
public get(index: number): DataAwsccKafkaconnectConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKafkaconnectConnectorTagsOutputReference <a name="DataAwsccKafkaconnectConnectorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags">DataAwsccKafkaconnectConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags">DataAwsccKafkaconnectConnectorTags</a>

---


### DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference <a name="DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKafkaconnectConnector } from '@cdktn/provider-awscc'

new dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn">workerConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration">DataAwsccKafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `workerConfigurationArn`<sup>Required</sup> <a name="workerConfigurationArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn"></a>

```typescript
public readonly workerConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKafkaconnectConnectorWorkerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration">DataAwsccKafkaconnectConnectorWorkerConfiguration</a>

---



