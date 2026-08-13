# `dataAwsccEcrReplicationConfiguration` Submodule <a name="`dataAwsccEcrReplicationConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcrReplicationConfiguration <a name="DataAwsccEcrReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecr_replication_configuration awscc_ecr_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

new dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration(scope: Construct, id: string, config: DataAwsccEcrReplicationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig">DataAwsccEcrReplicationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig">DataAwsccEcrReplicationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcrReplicationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isConstruct"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEcrReplicationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEcrReplicationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEcrReplicationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecr_replication_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcrReplicationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference">DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference">DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcrReplicationConfigurationConfig <a name="DataAwsccEcrReplicationConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

const dataAwsccEcrReplicationConfigurationConfig: dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecr_replication_configuration#id DataAwsccEcrReplicationConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcrReplicationConfigurationReplicationConfiguration <a name="DataAwsccEcrReplicationConfigurationReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

const dataAwsccEcrReplicationConfigurationReplicationConfiguration: dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfiguration = { ... }
```


### DataAwsccEcrReplicationConfigurationReplicationConfigurationRules <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationRules" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRules.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

const dataAwsccEcrReplicationConfigurationReplicationConfigurationRules: dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRules = { ... }
```


### DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

const dataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations: dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations = { ... }
```


### DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

const dataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters: dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

new dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfiguration">DataAwsccEcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.property.rules"></a>

```typescript
public readonly rules: DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcrReplicationConfigurationReplicationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfiguration">DataAwsccEcrReplicationConfigurationReplicationConfiguration</a>

---


### DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

new dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

new dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations</a>

---


### DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

new dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.get"></a>

```typescript
public get(index: number): DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

new dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.repositoryFilters">repositoryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRules">DataAwsccEcrReplicationConfigurationReplicationConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsList</a>

---

##### `repositoryFilters`<sup>Required</sup> <a name="repositoryFilters" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.repositoryFilters"></a>

```typescript
public readonly repositoryFilters: DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcrReplicationConfigurationReplicationConfigurationRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRules">DataAwsccEcrReplicationConfigurationReplicationConfigurationRules</a>

---


### DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

new dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference <a name="DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcrReplicationConfiguration } from '@cdktn/provider-awscc'

new dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrReplicationConfiguration.DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a>

---



