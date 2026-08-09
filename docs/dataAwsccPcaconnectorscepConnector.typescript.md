# `dataAwsccPcaconnectorscepConnector` Submodule <a name="`dataAwsccPcaconnectorscepConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectorscepConnector <a name="DataAwsccPcaconnectorscepConnector" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pcaconnectorscep_connector awscc_pcaconnectorscep_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector(scope: Construct, id: string, config: DataAwsccPcaconnectorscepConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig">DataAwsccPcaconnectorscepConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig">DataAwsccPcaconnectorscepConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectorscepConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccPcaconnectorscepConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPcaconnectorscepConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPcaconnectorscepConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pcaconnectorscep_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectorscepConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.mobileDeviceManagement">mobileDeviceManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.openIdConfiguration">openIdConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference">DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `mobileDeviceManagement`<sup>Required</sup> <a name="mobileDeviceManagement" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.mobileDeviceManagement"></a>

```typescript
public readonly mobileDeviceManagement: DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference</a>

---

##### `openIdConfiguration`<sup>Required</sup> <a name="openIdConfiguration" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.openIdConfiguration"></a>

```typescript
public readonly openIdConfiguration: DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference">DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectorscepConnectorConfig <a name="DataAwsccPcaconnectorscepConnectorConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectorscepConnectorConfig: dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pcaconnectorscep_connector#id DataAwsccPcaconnectorscepConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcaconnectorscepConnectorMobileDeviceManagement <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagement" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectorscepConnectorMobileDeviceManagement: dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement = { ... }
```


### DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune: dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune = { ... }
```


### DataAwsccPcaconnectorscepConnectorOpenIdConfiguration <a name="DataAwsccPcaconnectorscepConnectorOpenIdConfiguration" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectorscepConnectorOpenIdConfiguration: dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId">azureApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureApplicationId`<sup>Required</sup> <a name="azureApplicationId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId"></a>

```typescript
public readonly azureApplicationId: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune</a>

---


### DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune">intune</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement">DataAwsccPcaconnectorscepConnectorMobileDeviceManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intune`<sup>Required</sup> <a name="intune" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune"></a>

```typescript
public readonly intune: DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectorscepConnectorMobileDeviceManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement">DataAwsccPcaconnectorscepConnectorMobileDeviceManagement</a>

---


### DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference <a name="DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepConnector } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration">DataAwsccPcaconnectorscepConnectorOpenIdConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectorscepConnectorOpenIdConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration">DataAwsccPcaconnectorscepConnectorOpenIdConfiguration</a>

---



