# `dataAwsccDatazoneConnection` Submodule <a name="`dataAwsccDatazoneConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneConnection <a name="DataAwsccDatazoneConnection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_connection awscc_datazone_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnection(scope: Construct, id: string, config: DataAwsccDatazoneConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig">DataAwsccDatazoneConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig">DataAwsccDatazoneConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatazoneConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatazoneConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatazoneConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference">DataAwsccDatazoneConnectionAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.configurations">configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList">DataAwsccDatazoneConnectionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.enableTrustedIdentityPropagation">enableTrustedIdentityPropagation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentUserRole">environmentUserRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference">DataAwsccDatazoneConnectionPropsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `awsLocation`<sup>Required</sup> <a name="awsLocation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.awsLocation"></a>

```typescript
public readonly awsLocation: DataAwsccDatazoneConnectionAwsLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference">DataAwsccDatazoneConnectionAwsLocationOutputReference</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.configurations"></a>

```typescript
public readonly configurations: DataAwsccDatazoneConnectionConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList">DataAwsccDatazoneConnectionConfigurationsList</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

---

##### `enableTrustedIdentityPropagation`<sup>Required</sup> <a name="enableTrustedIdentityPropagation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.enableTrustedIdentityPropagation"></a>

```typescript
public readonly enableTrustedIdentityPropagation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

---

##### `environmentUserRole`<sup>Required</sup> <a name="environmentUserRole" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentUserRole"></a>

```typescript
public readonly environmentUserRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.props"></a>

```typescript
public readonly props: DataAwsccDatazoneConnectionPropsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference">DataAwsccDatazoneConnectionPropsOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneConnectionAwsLocation <a name="DataAwsccDatazoneConnectionAwsLocation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionAwsLocation: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation = { ... }
```


### DataAwsccDatazoneConnectionConfig <a name="DataAwsccDatazoneConnectionConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionConfig: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_connection#id DataAwsccDatazoneConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneConnectionConfigurations <a name="DataAwsccDatazoneConnectionConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionConfigurations: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations = { ... }
```


### DataAwsccDatazoneConnectionProps <a name="DataAwsccDatazoneConnectionProps" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionProps: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps = { ... }
```


### DataAwsccDatazoneConnectionPropsAmazonQProperties <a name="DataAwsccDatazoneConnectionPropsAmazonQProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsAmazonQProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsAthenaProperties <a name="DataAwsccDatazoneConnectionPropsAthenaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsAthenaProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsGlueProperties <a name="DataAwsccDatazoneConnectionPropsGlueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsGlueProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput = { ... }
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration = { ... }
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials = { ... }
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties = { ... }
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication = { ... }
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials = { ... }
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements = { ... }
```


### DataAwsccDatazoneConnectionPropsHyperPodProperties <a name="DataAwsccDatazoneConnectionPropsHyperPodProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsHyperPodProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsIamProperties <a name="DataAwsccDatazoneConnectionPropsIamProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsIamProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsLakehouseProperties <a name="DataAwsccDatazoneConnectionPropsLakehouseProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsLakehouseProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsMlflowProperties <a name="DataAwsccDatazoneConnectionPropsMlflowProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsMlflowProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsRedshiftProperties <a name="DataAwsccDatazoneConnectionPropsRedshiftProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsRedshiftProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials = { ... }
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword = { ... }
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync = { ... }
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule = { ... }
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage = { ... }
```


### DataAwsccDatazoneConnectionPropsS3Properties <a name="DataAwsccDatazoneConnectionPropsS3Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsS3Properties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties = { ... }
```


### DataAwsccDatazoneConnectionPropsSparkEmrProperties <a name="DataAwsccDatazoneConnectionPropsSparkEmrProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsSparkEmrProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsSparkGlueProperties <a name="DataAwsccDatazoneConnectionPropsSparkGlueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsSparkGlueProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties = { ... }
```


### DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs <a name="DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs = { ... }
```


### DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties <a name="DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

const dataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties: dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneConnectionAwsLocationOutputReference <a name="DataAwsccDatazoneConnectionAwsLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.accessRole">accessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.iamConnectionId">iamConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation">DataAwsccDatazoneConnectionAwsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.accessRole"></a>

```typescript
public readonly accessRole: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `iamConnectionId`<sup>Required</sup> <a name="iamConnectionId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.iamConnectionId"></a>

```typescript
public readonly iamConnectionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionAwsLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation">DataAwsccDatazoneConnectionAwsLocation</a>

---


### DataAwsccDatazoneConnectionConfigurationsList <a name="DataAwsccDatazoneConnectionConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccDatazoneConnectionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatazoneConnectionConfigurationsOutputReference <a name="DataAwsccDatazoneConnectionConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.properties">properties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations">DataAwsccDatazoneConnectionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.properties"></a>

```typescript
public readonly properties: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations">DataAwsccDatazoneConnectionConfigurations</a>

---


### DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode">authMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn">profileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties">DataAwsccDatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode"></a>

```typescript
public readonly authMode: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn"></a>

```typescript
public readonly profileArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsAmazonQProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties">DataAwsccDatazoneConnectionPropsAmazonQProperties</a>

---


### DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName">workgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties">DataAwsccDatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsAthenaProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties">DataAwsccDatazoneConnectionPropsAthenaProperties</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorizationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationCode`<sup>Required</sup> <a name="authorizationCode" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```typescript
public readonly authorizationCode: string;
```

- *Type:* string

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsManagedClientApplicationReference`<sup>Required</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```typescript
public readonly awsManagedClientApplicationReference: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientId`<sup>Required</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```typescript
public readonly userManagedClientApplicationClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">jwtToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `jwtToken`<sup>Required</sup> <a name="jwtToken" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```typescript
public readonly jwtToken: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientSecret`<sup>Required</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```typescript
public readonly userManagedClientApplicationClientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">oAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">oAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">oAuth2GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationCodeProperties`<sup>Required</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```typescript
public readonly authorizationCodeProperties: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `oAuth2ClientApplication`<sup>Required</sup> <a name="oAuth2ClientApplication" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```typescript
public readonly oAuth2ClientApplication: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `oAuth2Credentials`<sup>Required</sup> <a name="oAuth2Credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```typescript
public readonly oAuth2Credentials: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `oAuth2GrantType`<sup>Required</sup> <a name="oAuth2GrantType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```typescript
public readonly oAuth2GrantType: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `tokenUrlParametersMap`<sup>Required</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```typescript
public readonly tokenUrlParametersMap: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">oAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `basicAuthenticationCredentials`<sup>Required</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```typescript
public readonly basicAuthenticationCredentials: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `customAuthenticationCredentials`<sup>Required</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```typescript
public readonly customAuthenticationCredentials: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `oAuth2Properties`<sup>Required</sup> <a name="oAuth2Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```typescript
public readonly oAuth2Properties: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties">athenaProperties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties">connectionProperties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria">matchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties">pythonProperties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties">sparkProperties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials">validateCredentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments">validateForComputeEnvironments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties"></a>

```typescript
public readonly athenaProperties: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `connectionProperties`<sup>Required</sup> <a name="connectionProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties"></a>

```typescript
public readonly connectionProperties: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria"></a>

```typescript
public readonly matchCriteria: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `physicalConnectionRequirements`<sup>Required</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```typescript
public readonly physicalConnectionRequirements: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `pythonProperties`<sup>Required</sup> <a name="pythonProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties"></a>

```typescript
public readonly pythonProperties: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `sparkProperties`<sup>Required</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties"></a>

```typescript
public readonly sparkProperties: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `validateCredentials`<sup>Required</sup> <a name="validateCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials"></a>

```typescript
public readonly validateCredentials: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `validateForComputeEnvironments`<sup>Required</sup> <a name="validateForComputeEnvironments" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```typescript
public readonly validateForComputeEnvironments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList">subnetIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnetIdList`<sup>Required</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList"></a>

```typescript
public readonly subnetIdList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput">glueConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties">DataAwsccDatazoneConnectionPropsGlueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueConnectionInput`<sup>Required</sup> <a name="glueConnectionInput" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput"></a>

```typescript
public readonly glueConnectionInput: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsGlueProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties">DataAwsccDatazoneConnectionPropsGlueProperties</a>

---


### DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties">DataAwsccDatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsHyperPodProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties">DataAwsccDatazoneConnectionPropsHyperPodProperties</a>

---


### DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties">DataAwsccDatazoneConnectionPropsIamProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueLineageSyncEnabled`<sup>Required</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```typescript
public readonly glueLineageSyncEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsIamProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties">DataAwsccDatazoneConnectionPropsIamProperties</a>

---


### DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties">DataAwsccDatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueLineageSyncEnabled`<sup>Required</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```typescript
public readonly glueLineageSyncEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsLakehouseProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties">DataAwsccDatazoneConnectionPropsLakehouseProperties</a>

---


### DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn">trackingServerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties">DataAwsccDatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trackingServerArn`<sup>Required</sup> <a name="trackingServerArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn"></a>

```typescript
public readonly trackingServerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsMlflowProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties">DataAwsccDatazoneConnectionPropsMlflowProperties</a>

---


### DataAwsccDatazoneConnectionPropsOutputReference <a name="DataAwsccDatazoneConnectionPropsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.amazonQProperties">amazonQProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.athenaProperties">athenaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.glueProperties">glueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.hyperPodProperties">hyperPodProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference">DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.iamProperties">iamProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference">DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.lakehouseProperties">lakehouseProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference">DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.mlflowProperties">mlflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference">DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.redshiftProperties">redshiftProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.s3Properties">s3Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference">DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkEmrProperties">sparkEmrProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkGlueProperties">sparkGlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties">workflowsMwaaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties">workflowsServerlessProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps">DataAwsccDatazoneConnectionProps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonQProperties`<sup>Required</sup> <a name="amazonQProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.amazonQProperties"></a>

```typescript
public readonly amazonQProperties: DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference</a>

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.athenaProperties"></a>

```typescript
public readonly athenaProperties: DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference</a>

---

##### `glueProperties`<sup>Required</sup> <a name="glueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.glueProperties"></a>

```typescript
public readonly glueProperties: DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference</a>

---

##### `hyperPodProperties`<sup>Required</sup> <a name="hyperPodProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.hyperPodProperties"></a>

```typescript
public readonly hyperPodProperties: DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference">DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference</a>

---

##### `iamProperties`<sup>Required</sup> <a name="iamProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.iamProperties"></a>

```typescript
public readonly iamProperties: DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference">DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference</a>

---

##### `lakehouseProperties`<sup>Required</sup> <a name="lakehouseProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.lakehouseProperties"></a>

```typescript
public readonly lakehouseProperties: DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference">DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference</a>

---

##### `mlflowProperties`<sup>Required</sup> <a name="mlflowProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.mlflowProperties"></a>

```typescript
public readonly mlflowProperties: DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference">DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference</a>

---

##### `redshiftProperties`<sup>Required</sup> <a name="redshiftProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.redshiftProperties"></a>

```typescript
public readonly redshiftProperties: DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference</a>

---

##### `s3Properties`<sup>Required</sup> <a name="s3Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.s3Properties"></a>

```typescript
public readonly s3Properties: DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference">DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference</a>

---

##### `sparkEmrProperties`<sup>Required</sup> <a name="sparkEmrProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkEmrProperties"></a>

```typescript
public readonly sparkEmrProperties: DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference</a>

---

##### `sparkGlueProperties`<sup>Required</sup> <a name="sparkGlueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkGlueProperties"></a>

```typescript
public readonly sparkGlueProperties: DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference</a>

---

##### `workflowsMwaaProperties`<sup>Required</sup> <a name="workflowsMwaaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties"></a>

```typescript
public readonly workflowsMwaaProperties: DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a>

---

##### `workflowsServerlessProperties`<sup>Required</sup> <a name="workflowsServerlessProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties"></a>

```typescript
public readonly workflowsServerlessProperties: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionProps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps">DataAwsccDatazoneConnectionProps</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword">usernamePassword</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `usernamePassword`<sup>Required</sup> <a name="usernamePassword" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword"></a>

```typescript
public readonly usernamePassword: DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync">lineageSync</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties">DataAwsccDatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials"></a>

```typescript
public readonly credentials: DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `lineageSync`<sup>Required</sup> <a name="lineageSync" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync"></a>

```typescript
public readonly lineageSync: DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage"></a>

```typescript
public readonly storage: DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsRedshiftProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties">DataAwsccDatazoneConnectionPropsRedshiftProperties</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName">workgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage</a>

---


### DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation">registerS3AccessGrantLocation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId">s3AccessGrantLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties">DataAwsccDatazoneConnectionPropsS3Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `registerS3AccessGrantLocation`<sup>Required</sup> <a name="registerS3AccessGrantLocation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation"></a>

```typescript
public readonly registerS3AccessGrantLocation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `s3AccessGrantLocationId`<sup>Required</sup> <a name="s3AccessGrantLocationId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId"></a>

```typescript
public readonly s3AccessGrantLocationId: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsS3Properties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties">DataAwsccDatazoneConnectionPropsS3Properties</a>

---


### DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn">computeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri">logUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn">managedEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole">runtimeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri">trustedCertificatesS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties">DataAwsccDatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeArn`<sup>Required</sup> <a name="computeArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn"></a>

```typescript
public readonly computeArn: string;
```

- *Type:* string

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `javaVirtualEnv`<sup>Required</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv"></a>

```typescript
public readonly javaVirtualEnv: string;
```

- *Type:* string

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

---

##### `managedEndpointArn`<sup>Required</sup> <a name="managedEndpointArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn"></a>

```typescript
public readonly managedEndpointArn: string;
```

- *Type:* string

---

##### `pythonVirtualEnv`<sup>Required</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv"></a>

```typescript
public readonly pythonVirtualEnv: string;
```

- *Type:* string

---

##### `runtimeRole`<sup>Required</sup> <a name="runtimeRole" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole"></a>

```typescript
public readonly runtimeRole: string;
```

- *Type:* string

---

##### `trustedCertificatesS3Uri`<sup>Required</sup> <a name="trustedCertificatesS3Uri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri"></a>

```typescript
public readonly trustedCertificatesS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsSparkEmrProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties">DataAwsccDatazoneConnectionPropsSparkEmrProperties</a>

---


### DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference <a name="DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---


### DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs">additionalArgs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion">glueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType">workerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties">DataAwsccDatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalArgs`<sup>Required</sup> <a name="additionalArgs" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs"></a>

```typescript
public readonly additionalArgs: DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a>

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

---

##### `javaVirtualEnv`<sup>Required</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv"></a>

```typescript
public readonly javaVirtualEnv: string;
```

- *Type:* string

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `pythonVirtualEnv`<sup>Required</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv"></a>

```typescript
public readonly pythonVirtualEnv: string;
```

- *Type:* string

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsSparkGlueProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties">DataAwsccDatazoneConnectionPropsSparkGlueProperties</a>

---


### DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneConnection } from '@cdktn/provider-awscc'

new dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName">mwaaEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties">DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mwaaEnvironmentName`<sup>Required</sup> <a name="mwaaEnvironmentName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName"></a>

```typescript
public readonly mwaaEnvironmentName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties">DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties</a>

---



