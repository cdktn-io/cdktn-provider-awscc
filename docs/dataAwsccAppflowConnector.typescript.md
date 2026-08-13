# `dataAwsccAppflowConnector` Submodule <a name="`dataAwsccAppflowConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccAppflowConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppflowConnector <a name="DataAwsccAppflowConnector" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appflow_connector awscc_appflow_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.Initializer"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

new dataAwsccAppflowConnector.DataAwsccAppflowConnector(scope: Construct, id: string, config: DataAwsccAppflowConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig">DataAwsccAppflowConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig">DataAwsccAppflowConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppflowConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.isConstruct"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

dataAwsccAppflowConnector.DataAwsccAppflowConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.isTerraformElement"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

dataAwsccAppflowConnector.DataAwsccAppflowConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

dataAwsccAppflowConnector.DataAwsccAppflowConnector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.generateConfigForImport"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

dataAwsccAppflowConnector.DataAwsccAppflowConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppflowConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppflowConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppflowConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appflow_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppflowConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.connectorLabel">connectorLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.connectorProvisioningConfig">connectorProvisioningConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference">DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.connectorProvisioningType">connectorProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `connectorLabel`<sup>Required</sup> <a name="connectorLabel" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.connectorLabel"></a>

```typescript
public readonly connectorLabel: string;
```

- *Type:* string

---

##### `connectorProvisioningConfig`<sup>Required</sup> <a name="connectorProvisioningConfig" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.connectorProvisioningConfig"></a>

```typescript
public readonly connectorProvisioningConfig: DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference">DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference</a>

---

##### `connectorProvisioningType`<sup>Required</sup> <a name="connectorProvisioningType" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.connectorProvisioningType"></a>

```typescript
public readonly connectorProvisioningType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppflowConnectorConfig <a name="DataAwsccAppflowConnectorConfig" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.Initializer"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

const dataAwsccAppflowConnectorConfig: dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appflow_connector#id DataAwsccAppflowConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppflowConnectorConnectorProvisioningConfig <a name="DataAwsccAppflowConnectorConnectorProvisioningConfig" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfig.Initializer"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

const dataAwsccAppflowConnectorConnectorProvisioningConfig: dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfig = { ... }
```


### DataAwsccAppflowConnectorConnectorProvisioningConfigLambda <a name="DataAwsccAppflowConnectorConnectorProvisioningConfigLambda" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambda.Initializer"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

const dataAwsccAppflowConnectorConnectorProvisioningConfigLambda: dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambda = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference <a name="DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

new dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambda">DataAwsccAppflowConnectorConnectorProvisioningConfigLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppflowConnectorConnectorProvisioningConfigLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambda">DataAwsccAppflowConnectorConnectorProvisioningConfigLambda</a>

---


### DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference <a name="DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppflowConnector } from '@cdktn/provider-awscc'

new dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference">DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfig">DataAwsccAppflowConnectorConnectorProvisioningConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda"></a>

```typescript
public readonly lambda: DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference">DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppflowConnectorConnectorProvisioningConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppflowConnector.DataAwsccAppflowConnectorConnectorProvisioningConfig">DataAwsccAppflowConnectorConnectorProvisioningConfig</a>

---



