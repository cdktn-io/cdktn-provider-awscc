# `dataAwsccRdsDbProxyTargetGroup` Submodule <a name="`dataAwsccRdsDbProxyTargetGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRdsDbProxyTargetGroup <a name="DataAwsccRdsDbProxyTargetGroup" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer"></a>

```typescript
import { dataAwsccRdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

new dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup(scope: Construct, id: string, config: DataAwsccRdsDbProxyTargetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig">DataAwsccRdsDbProxyTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig">DataAwsccRdsDbProxyTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct"></a>

```typescript
import { dataAwsccRdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement"></a>

```typescript
import { dataAwsccRdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccRdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccRdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRdsDbProxyTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRdsDbProxyTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rds_db_proxy_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRdsDbProxyTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo">connectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbClusterIdentifiers">dbClusterIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbInstanceIdentifiers">dbInstanceIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbProxyName">dbProxyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `connectionPoolConfigurationInfo`<sup>Required</sup> <a name="connectionPoolConfigurationInfo" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo"></a>

```typescript
public readonly connectionPoolConfigurationInfo: DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a>

---

##### `dbClusterIdentifiers`<sup>Required</sup> <a name="dbClusterIdentifiers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbClusterIdentifiers"></a>

```typescript
public readonly dbClusterIdentifiers: string[];
```

- *Type:* string[]

---

##### `dbInstanceIdentifiers`<sup>Required</sup> <a name="dbInstanceIdentifiers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbInstanceIdentifiers"></a>

```typescript
public readonly dbInstanceIdentifiers: string[];
```

- *Type:* string[]

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbProxyName"></a>

```typescript
public readonly dbProxyName: string;
```

- *Type:* string

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRdsDbProxyTargetGroupConfig <a name="DataAwsccRdsDbProxyTargetGroupConfig" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.Initializer"></a>

```typescript
import { dataAwsccRdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

const dataAwsccRdsDbProxyTargetGroupConfig: dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rds_db_proxy_target_group#id DataAwsccRdsDbProxyTargetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo <a name="DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo.Initializer"></a>

```typescript
import { dataAwsccRdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

const dataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo: dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference <a name="DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsccRdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

new dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout">connectionBorrowTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery">initQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent">maxConnectionsPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent">maxIdleConnectionsPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters">sessionPinningFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionBorrowTimeout`<sup>Required</sup> <a name="connectionBorrowTimeout" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout"></a>

```typescript
public readonly connectionBorrowTimeout: number;
```

- *Type:* number

---

##### `initQuery`<sup>Required</sup> <a name="initQuery" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery"></a>

```typescript
public readonly initQuery: string;
```

- *Type:* string

---

##### `maxConnectionsPercent`<sup>Required</sup> <a name="maxConnectionsPercent" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent"></a>

```typescript
public readonly maxConnectionsPercent: number;
```

- *Type:* number

---

##### `maxIdleConnectionsPercent`<sup>Required</sup> <a name="maxIdleConnectionsPercent" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent"></a>

```typescript
public readonly maxIdleConnectionsPercent: number;
```

- *Type:* number

---

##### `sessionPinningFilters`<sup>Required</sup> <a name="sessionPinningFilters" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters"></a>

```typescript
public readonly sessionPinningFilters: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---



