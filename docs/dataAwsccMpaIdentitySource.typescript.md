# `dataAwsccMpaIdentitySource` Submodule <a name="`dataAwsccMpaIdentitySource` Submodule" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMpaIdentitySource <a name="DataAwsccMpaIdentitySource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/mpa_identity_source awscc_mpa_identity_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

new dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource(scope: Construct, id: string, config: DataAwsccMpaIdentitySourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig">DataAwsccMpaIdentitySourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig">DataAwsccMpaIdentitySourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMpaIdentitySource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isConstruct"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformElement"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformDataSource"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMpaIdentitySource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMpaIdentitySource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMpaIdentitySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/mpa_identity_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMpaIdentitySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceArn">identitySourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceParameters">identitySourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference">DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceType">identitySourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList">DataAwsccMpaIdentitySourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `identitySourceArn`<sup>Required</sup> <a name="identitySourceArn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceArn"></a>

```typescript
public readonly identitySourceArn: string;
```

- *Type:* string

---

##### `identitySourceParameters`<sup>Required</sup> <a name="identitySourceParameters" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceParameters"></a>

```typescript
public readonly identitySourceParameters: DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference">DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference</a>

---

##### `identitySourceType`<sup>Required</sup> <a name="identitySourceType" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceType"></a>

```typescript
public readonly identitySourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.tags"></a>

```typescript
public readonly tags: DataAwsccMpaIdentitySourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList">DataAwsccMpaIdentitySourceTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMpaIdentitySourceConfig <a name="DataAwsccMpaIdentitySourceConfig" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.Initializer"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

const dataAwsccMpaIdentitySourceConfig: dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/mpa_identity_source#id DataAwsccMpaIdentitySource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMpaIdentitySourceIdentitySourceParameters <a name="DataAwsccMpaIdentitySourceIdentitySourceParameters" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters.Initializer"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

const dataAwsccMpaIdentitySourceIdentitySourceParameters: dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters = { ... }
```


### DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter <a name="DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter.Initializer"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

const dataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter: dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter = { ... }
```


### DataAwsccMpaIdentitySourceTags <a name="DataAwsccMpaIdentitySourceTags" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags.Initializer"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

const dataAwsccMpaIdentitySourceTags: dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference <a name="DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

new dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl">approvalPortalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter">DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalPortalUrl`<sup>Required</sup> <a name="approvalPortalUrl" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl"></a>

```typescript
public readonly approvalPortalUrl: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter">DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

---


### DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference <a name="DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

new dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter">iamIdentityCenter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters">DataAwsccMpaIdentitySourceIdentitySourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamIdentityCenter`<sup>Required</sup> <a name="iamIdentityCenter" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter"></a>

```typescript
public readonly iamIdentityCenter: DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMpaIdentitySourceIdentitySourceParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters">DataAwsccMpaIdentitySourceIdentitySourceParameters</a>

---


### DataAwsccMpaIdentitySourceTagsList <a name="DataAwsccMpaIdentitySourceTagsList" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

new dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMpaIdentitySourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMpaIdentitySourceTagsOutputReference <a name="DataAwsccMpaIdentitySourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMpaIdentitySource } from '@cdktn/provider-awscc'

new dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags">DataAwsccMpaIdentitySourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMpaIdentitySourceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags">DataAwsccMpaIdentitySourceTags</a>

---



