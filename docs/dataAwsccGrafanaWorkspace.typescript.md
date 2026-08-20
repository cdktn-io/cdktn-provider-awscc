# `dataAwsccGrafanaWorkspace` Submodule <a name="`dataAwsccGrafanaWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGrafanaWorkspace <a name="DataAwsccGrafanaWorkspace" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/grafana_workspace awscc_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

new dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace(scope: Construct, id: string, config: DataAwsccGrafanaWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig">DataAwsccGrafanaWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig">DataAwsccGrafanaWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGrafanaWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGrafanaWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGrafanaWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGrafanaWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/grafana_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGrafanaWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.accountAccessType">accountAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.authenticationProviders">authenticationProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dataSources">dataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.grafanaVersion">grafanaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.modificationTimestamp">modificationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference">DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.notificationDestinations">notificationDestinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.permissionType">permissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.pluginAdminEnabled">pluginAdminEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfigurationStatus">samlConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.ssoClientId">ssoClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.stackSetName">stackSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList">DataAwsccGrafanaWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference">DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: string;
```

- *Type:* string

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: string[];
```

- *Type:* string[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `grafanaVersion`<sup>Required</sup> <a name="grafanaVersion" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.grafanaVersion"></a>

```typescript
public readonly grafanaVersion: string;
```

- *Type:* string

---

##### `modificationTimestamp`<sup>Required</sup> <a name="modificationTimestamp" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.modificationTimestamp"></a>

```typescript
public readonly modificationTimestamp: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkAccessControl`<sup>Required</sup> <a name="networkAccessControl" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.networkAccessControl"></a>

```typescript
public readonly networkAccessControl: DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference">DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference</a>

---

##### `notificationDestinations`<sup>Required</sup> <a name="notificationDestinations" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: string[];
```

- *Type:* string[]

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `organizationRoleName`<sup>Required</sup> <a name="organizationRoleName" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

---

##### `pluginAdminEnabled`<sup>Required</sup> <a name="pluginAdminEnabled" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.pluginAdminEnabled"></a>

```typescript
public readonly pluginAdminEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `samlConfiguration`<sup>Required</sup> <a name="samlConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference</a>

---

##### `samlConfigurationStatus`<sup>Required</sup> <a name="samlConfigurationStatus" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfigurationStatus"></a>

```typescript
public readonly samlConfigurationStatus: string;
```

- *Type:* string

---

##### `ssoClientId`<sup>Required</sup> <a name="ssoClientId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.ssoClientId"></a>

```typescript
public readonly ssoClientId: string;
```

- *Type:* string

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tags"></a>

```typescript
public readonly tags: DataAwsccGrafanaWorkspaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList">DataAwsccGrafanaWorkspaceTagsList</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference">DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGrafanaWorkspaceConfig <a name="DataAwsccGrafanaWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

const dataAwsccGrafanaWorkspaceConfig: dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/grafana_workspace#id DataAwsccGrafanaWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGrafanaWorkspaceNetworkAccessControl <a name="DataAwsccGrafanaWorkspaceNetworkAccessControl" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

const dataAwsccGrafanaWorkspaceNetworkAccessControl: dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl = { ... }
```


### DataAwsccGrafanaWorkspaceSamlConfiguration <a name="DataAwsccGrafanaWorkspaceSamlConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

const dataAwsccGrafanaWorkspaceSamlConfiguration: dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration = { ... }
```


### DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes <a name="DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

const dataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes: dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes = { ... }
```


### DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata <a name="DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

const dataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata: dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata = { ... }
```


### DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues <a name="DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

const dataAwsccGrafanaWorkspaceSamlConfigurationRoleValues: dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues = { ... }
```


### DataAwsccGrafanaWorkspaceTags <a name="DataAwsccGrafanaWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

const dataAwsccGrafanaWorkspaceTags: dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags = { ... }
```


### DataAwsccGrafanaWorkspaceVpcConfiguration <a name="DataAwsccGrafanaWorkspaceVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

const dataAwsccGrafanaWorkspaceVpcConfiguration: dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference <a name="DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

new dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds">vpceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl">DataAwsccGrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

---

##### `vpceIds`<sup>Required</sup> <a name="vpceIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds"></a>

```typescript
public readonly vpceIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGrafanaWorkspaceNetworkAccessControl;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl">DataAwsccGrafanaWorkspaceNetworkAccessControl</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

new dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups">groups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org">org</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups"></a>

```typescript
public readonly groups: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org"></a>

```typescript
public readonly org: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

new dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml">xml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml"></a>

```typescript
public readonly xml: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

new dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes">assertionAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata">idpMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration">loginValidityDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues">roleValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration">DataAwsccGrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOrganizations`<sup>Required</sup> <a name="allowedOrganizations" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string[];
```

- *Type:* string[]

---

##### `assertionAttributes`<sup>Required</sup> <a name="assertionAttributes" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes"></a>

```typescript
public readonly assertionAttributes: DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a>

---

##### `idpMetadata`<sup>Required</sup> <a name="idpMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata"></a>

```typescript
public readonly idpMetadata: DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a>

---

##### `loginValidityDuration`<sup>Required</sup> <a name="loginValidityDuration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration"></a>

```typescript
public readonly loginValidityDuration: number;
```

- *Type:* number

---

##### `roleValues`<sup>Required</sup> <a name="roleValues" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues"></a>

```typescript
public readonly roleValues: DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGrafanaWorkspaceSamlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration">DataAwsccGrafanaWorkspaceSamlConfiguration</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

new dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin">admin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor">editor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin"></a>

```typescript
public readonly admin: string[];
```

- *Type:* string[]

---

##### `editor`<sup>Required</sup> <a name="editor" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor"></a>

```typescript
public readonly editor: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues</a>

---


### DataAwsccGrafanaWorkspaceTagsList <a name="DataAwsccGrafanaWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

new dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccGrafanaWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGrafanaWorkspaceTagsOutputReference <a name="DataAwsccGrafanaWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

new dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags">DataAwsccGrafanaWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGrafanaWorkspaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags">DataAwsccGrafanaWorkspaceTags</a>

---


### DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference <a name="DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGrafanaWorkspace } from '@cdktn/provider-awscc'

new dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration">DataAwsccGrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGrafanaWorkspaceVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration">DataAwsccGrafanaWorkspaceVpcConfiguration</a>

---



