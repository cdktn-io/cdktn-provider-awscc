# `dataAwsccSsmincidentsReplicationSet` Submodule <a name="`dataAwsccSsmincidentsReplicationSet` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmincidentsReplicationSet <a name="DataAwsccSsmincidentsReplicationSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssmincidents_replication_set awscc_ssmincidents_replication_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet(scope: Construct, id: string, config: DataAwsccSsmincidentsReplicationSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig">DataAwsccSsmincidentsReplicationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig">DataAwsccSsmincidentsReplicationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isConstruct"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformElement"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformDataSource"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmincidentsReplicationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmincidentsReplicationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssmincidents_replication_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmincidentsReplicationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.deletionProtected">deletionProtected</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.regions">regions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList">DataAwsccSsmincidentsReplicationSetRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList">DataAwsccSsmincidentsReplicationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deletionProtected`<sup>Required</sup> <a name="deletionProtected" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.deletionProtected"></a>

```typescript
public readonly deletionProtected: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.regions"></a>

```typescript
public readonly regions: DataAwsccSsmincidentsReplicationSetRegionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList">DataAwsccSsmincidentsReplicationSetRegionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.tags"></a>

```typescript
public readonly tags: DataAwsccSsmincidentsReplicationSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList">DataAwsccSsmincidentsReplicationSetTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmincidentsReplicationSetConfig <a name="DataAwsccSsmincidentsReplicationSetConfig" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsReplicationSetConfig: dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssmincidents_replication_set#id DataAwsccSsmincidentsReplicationSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmincidentsReplicationSetRegions <a name="DataAwsccSsmincidentsReplicationSetRegions" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegions.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsReplicationSetRegions: dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegions = { ... }
```


### DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration <a name="DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration: dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration = { ... }
```


### DataAwsccSsmincidentsReplicationSetTags <a name="DataAwsccSsmincidentsReplicationSetTags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTags.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

const dataAwsccSsmincidentsReplicationSetTags: dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmincidentsReplicationSetRegionsList <a name="DataAwsccSsmincidentsReplicationSetRegionsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmincidentsReplicationSetRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmincidentsReplicationSetRegionsOutputReference <a name="DataAwsccSsmincidentsReplicationSetRegionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.regionConfiguration">regionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference">DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegions">DataAwsccSsmincidentsReplicationSetRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionConfiguration`<sup>Required</sup> <a name="regionConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.regionConfiguration"></a>

```typescript
public readonly regionConfiguration: DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference">DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference</a>

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsReplicationSetRegions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegions">DataAwsccSsmincidentsReplicationSetRegions</a>

---


### DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference <a name="DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyId">sseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration">DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sseKmsKeyId`<sup>Required</sup> <a name="sseKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyId"></a>

```typescript
public readonly sseKmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration">DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration</a>

---


### DataAwsccSsmincidentsReplicationSetTagsList <a name="DataAwsccSsmincidentsReplicationSetTagsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmincidentsReplicationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmincidentsReplicationSetTagsOutputReference <a name="DataAwsccSsmincidentsReplicationSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmincidentsReplicationSet } from '@cdktn/provider-awscc'

new dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTags">DataAwsccSsmincidentsReplicationSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmincidentsReplicationSetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsReplicationSet.DataAwsccSsmincidentsReplicationSetTags">DataAwsccSsmincidentsReplicationSetTags</a>

---



