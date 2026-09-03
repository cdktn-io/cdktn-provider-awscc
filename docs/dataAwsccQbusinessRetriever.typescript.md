# `dataAwsccQbusinessRetriever` Submodule <a name="`dataAwsccQbusinessRetriever` Submodule" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQbusinessRetriever <a name="DataAwsccQbusinessRetriever" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/qbusiness_retriever awscc_qbusiness_retriever}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

new dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever(scope: Construct, id: string, config: DataAwsccQbusinessRetrieverConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig">DataAwsccQbusinessRetrieverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig">DataAwsccQbusinessRetrieverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQbusinessRetriever resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isConstruct"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformElement"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformDataSource"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccQbusinessRetriever resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQbusinessRetriever to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQbusinessRetriever that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/qbusiness_retriever#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQbusinessRetriever to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.retrieverArn">retrieverArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.retrieverId">retrieverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList">DataAwsccQbusinessRetrieverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccQbusinessRetrieverConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `retrieverArn`<sup>Required</sup> <a name="retrieverArn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.retrieverArn"></a>

```typescript
public readonly retrieverArn: string;
```

- *Type:* string

---

##### `retrieverId`<sup>Required</sup> <a name="retrieverId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.retrieverId"></a>

```typescript
public readonly retrieverId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.tags"></a>

```typescript
public readonly tags: DataAwsccQbusinessRetrieverTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList">DataAwsccQbusinessRetrieverTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQbusinessRetrieverConfig <a name="DataAwsccQbusinessRetrieverConfig" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

const dataAwsccQbusinessRetrieverConfig: dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/qbusiness_retriever#id DataAwsccQbusinessRetriever#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQbusinessRetrieverConfiguration <a name="DataAwsccQbusinessRetrieverConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

const dataAwsccQbusinessRetrieverConfiguration: dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfiguration = { ... }
```


### DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration <a name="DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

const dataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration: dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration = { ... }
```


### DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration <a name="DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

const dataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration: dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration = { ... }
```


### DataAwsccQbusinessRetrieverTags <a name="DataAwsccQbusinessRetrieverTags" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTags.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

const dataAwsccQbusinessRetrieverTags: dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference <a name="DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

new dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration">DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration">DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration</a>

---


### DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference <a name="DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

new dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration">DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration">DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration</a>

---


### DataAwsccQbusinessRetrieverConfigurationOutputReference <a name="DataAwsccQbusinessRetrieverConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

new dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfiguration">kendraIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfiguration">nativeIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfiguration">DataAwsccQbusinessRetrieverConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kendraIndexConfiguration`<sup>Required</sup> <a name="kendraIndexConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfiguration"></a>

```typescript
public readonly kendraIndexConfiguration: DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference</a>

---

##### `nativeIndexConfiguration`<sup>Required</sup> <a name="nativeIndexConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfiguration"></a>

```typescript
public readonly nativeIndexConfiguration: DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessRetrieverConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfiguration">DataAwsccQbusinessRetrieverConfiguration</a>

---


### DataAwsccQbusinessRetrieverTagsList <a name="DataAwsccQbusinessRetrieverTagsList" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

new dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.get"></a>

```typescript
public get(index: number): DataAwsccQbusinessRetrieverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQbusinessRetrieverTagsOutputReference <a name="DataAwsccQbusinessRetrieverTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessRetriever } from '@cdktn/provider-awscc'

new dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTags">DataAwsccQbusinessRetrieverTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessRetrieverTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTags">DataAwsccQbusinessRetrieverTags</a>

---



