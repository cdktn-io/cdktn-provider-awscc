# `dataAwsccQuicksightCustomPermissions` Submodule <a name="`dataAwsccQuicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightCustomPermissions <a name="DataAwsccQuicksightCustomPermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

new dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions(scope: Construct, id: string, config: DataAwsccQuicksightCustomPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig">DataAwsccQuicksightCustomPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig">DataAwsccQuicksightCustomPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightCustomPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName">customPermissionsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities"></a>

```typescript
public readonly capabilities: DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `customPermissionsName`<sup>Required</sup> <a name="customPermissionsName" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName"></a>

```typescript
public readonly customPermissionsName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags"></a>

```typescript
public readonly tags: DataAwsccQuicksightCustomPermissionsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightCustomPermissionsCapabilities <a name="DataAwsccQuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities.Initializer"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

const dataAwsccQuicksightCustomPermissionsCapabilities: dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities = { ... }
```


### DataAwsccQuicksightCustomPermissionsConfig <a name="DataAwsccQuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.Initializer"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

const dataAwsccQuicksightCustomPermissionsConfig: dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_custom_permissions#id DataAwsccQuicksightCustomPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightCustomPermissionsTags <a name="DataAwsccQuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags.Initializer"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

const dataAwsccQuicksightCustomPermissionsTags: dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference <a name="DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

new dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">accessAppsNativeDataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">addOrRunAnomalyDetectionForAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">amazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">amazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">amazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">amazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">analysis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">approveFlowShareRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">apps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">asanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">automate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">bambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">boxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">buildCalculatedFieldWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">canvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">chatAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">comprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">comprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">confluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">createAndUpdateAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">createAndUpdateAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">createAndUpdateAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">createAndUpdateAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">createAndUpdateApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">createAndUpdateAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">createAndUpdateBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">createAndUpdateBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">createAndUpdateCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">createAndUpdateComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">createAndUpdateComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">createAndUpdateConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">createAndUpdateDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">createAndUpdateDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">createAndUpdateDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">createAndUpdateFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">createAndUpdateGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">createAndUpdateGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">createAndUpdateGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">createAndUpdateHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">createAndUpdateHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">createAndUpdateIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">createAndUpdateJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">createAndUpdateKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">createAndUpdateLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">createAndUpdateMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">createAndUpdateMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">createAndUpdateMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">createAndUpdateMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">createAndUpdateNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">createAndUpdateNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">createAndUpdateOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">createAndUpdateOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">createAndUpdatePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">createAndUpdateSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">createAndUpdateSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">createAndUpdateSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">createAndUpdateSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">createAndUpdateSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">createAndUpdateSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">createAndUpdateSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">createAndUpdateSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">createAndUpdateServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">createAndUpdateSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">createAndUpdateSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">createAndUpdateSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">createAndUpdateTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">createAndUpdateThemes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">createAndUpdateThresholdAlerts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">createAndUpdateZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">createChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">createDashboardExecutiveSummaryWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">createSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">createSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">createSpiceDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">dashboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">editVisualWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">exportToCsv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">exportToCsvInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">exportToExcel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">exportToExcelInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">exportToPdf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">exportToPdfInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">factSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">flow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">genericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">githubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">googleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">hubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">huggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">includeContentInScheduledReportsEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">intercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">invokeAppsAiInference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">jiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">knowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">linearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">manageSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">mcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">mondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">msExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">msTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">newRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">notionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">oneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">openApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">pagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">performFlowUiTask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">printReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">publishWithoutApproval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">renameSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research">research</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">salesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">sandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">sandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">sapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">sapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">sapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">sapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">sapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">serviceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">shareAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">shareAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">shareAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">shareAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">shareAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">shareApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">shareAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">shareBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">shareBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">shareCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">shareChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">shareComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">shareComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">shareConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">shareDashboards</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">shareDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">shareDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">shareFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">shareGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">shareGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">shareGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">shareHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">shareHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">shareIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">shareJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">shareKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">shareLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">shareMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">shareMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">shareMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">shareMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">shareNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">shareNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">shareOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">shareOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">sharePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">sharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">shareSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">shareSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">shareSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">shareSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">shareSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">shareSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">shareSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">shareSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">shareServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">shareSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">shareSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">shareSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">shareSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">shareTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">shareZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">slackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">smartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space">space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">subscribeDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">textractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">useAgentWebSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">useAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">useAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">useAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">useAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">useAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">useBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">useBedrockModels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">useBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">useCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">useComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">useComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">useConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">useFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">useGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">useGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">useGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">useHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">useHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">useIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">useJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">useLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">useMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">useMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">useMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">useMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">useNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">useNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">useOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">useOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">usePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">useSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">useSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">useSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">useSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">useSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">useSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">useSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">useSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">useServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">useSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">useSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">useSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">useTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">useZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">viewAccountSpiceCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">zendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessAppsNativeDataStore`<sup>Required</sup> <a name="accessAppsNativeDataStore" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```typescript
public readonly accessAppsNativeDataStore: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `addOrRunAnomalyDetectionForAnalyses`<sup>Required</sup> <a name="addOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```typescript
public readonly addOrRunAnomalyDetectionForAnalyses: string;
```

- *Type:* string

---

##### `amazonBedrockArsAction`<sup>Required</sup> <a name="amazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```typescript
public readonly amazonBedrockArsAction: string;
```

- *Type:* string

---

##### `amazonBedrockFsAction`<sup>Required</sup> <a name="amazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```typescript
public readonly amazonBedrockFsAction: string;
```

- *Type:* string

---

##### `amazonBedrockKrsAction`<sup>Required</sup> <a name="amazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```typescript
public readonly amazonBedrockKrsAction: string;
```

- *Type:* string

---

##### `amazonSThreeAction`<sup>Required</sup> <a name="amazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```typescript
public readonly amazonSThreeAction: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```typescript
public readonly analysis: string;
```

- *Type:* string

---

##### `approveFlowShareRequests`<sup>Required</sup> <a name="approveFlowShareRequests" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```typescript
public readonly approveFlowShareRequests: string;
```

- *Type:* string

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```typescript
public readonly apps: string;
```

- *Type:* string

---

##### `asanaAction`<sup>Required</sup> <a name="asanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```typescript
public readonly asanaAction: string;
```

- *Type:* string

---

##### `automate`<sup>Required</sup> <a name="automate" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```typescript
public readonly automate: string;
```

- *Type:* string

---

##### `bambooHrAction`<sup>Required</sup> <a name="bambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```typescript
public readonly bambooHrAction: string;
```

- *Type:* string

---

##### `boxAgentAction`<sup>Required</sup> <a name="boxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```typescript
public readonly boxAgentAction: string;
```

- *Type:* string

---

##### `buildCalculatedFieldWithQ`<sup>Required</sup> <a name="buildCalculatedFieldWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```typescript
public readonly buildCalculatedFieldWithQ: string;
```

- *Type:* string

---

##### `canvaAgentAction`<sup>Required</sup> <a name="canvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```typescript
public readonly canvaAgentAction: string;
```

- *Type:* string

---

##### `chatAgent`<sup>Required</sup> <a name="chatAgent" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```typescript
public readonly chatAgent: string;
```

- *Type:* string

---

##### `comprehendAction`<sup>Required</sup> <a name="comprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```typescript
public readonly comprehendAction: string;
```

- *Type:* string

---

##### `comprehendMedicalAction`<sup>Required</sup> <a name="comprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```typescript
public readonly comprehendMedicalAction: string;
```

- *Type:* string

---

##### `confluenceAction`<sup>Required</sup> <a name="confluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```typescript
public readonly confluenceAction: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonBedrockArsAction`<sup>Required</sup> <a name="createAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```typescript
public readonly createAndUpdateAmazonBedrockArsAction: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonBedrockFsAction`<sup>Required</sup> <a name="createAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```typescript
public readonly createAndUpdateAmazonBedrockFsAction: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonBedrockKrsAction`<sup>Required</sup> <a name="createAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```typescript
public readonly createAndUpdateAmazonBedrockKrsAction: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonSThreeAction`<sup>Required</sup> <a name="createAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```typescript
public readonly createAndUpdateAmazonSThreeAction: string;
```

- *Type:* string

---

##### `createAndUpdateApps`<sup>Required</sup> <a name="createAndUpdateApps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```typescript
public readonly createAndUpdateApps: string;
```

- *Type:* string

---

##### `createAndUpdateAsanaAction`<sup>Required</sup> <a name="createAndUpdateAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```typescript
public readonly createAndUpdateAsanaAction: string;
```

- *Type:* string

---

##### `createAndUpdateBambooHrAction`<sup>Required</sup> <a name="createAndUpdateBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```typescript
public readonly createAndUpdateBambooHrAction: string;
```

- *Type:* string

---

##### `createAndUpdateBoxAgentAction`<sup>Required</sup> <a name="createAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```typescript
public readonly createAndUpdateBoxAgentAction: string;
```

- *Type:* string

---

##### `createAndUpdateCanvaAgentAction`<sup>Required</sup> <a name="createAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```typescript
public readonly createAndUpdateCanvaAgentAction: string;
```

- *Type:* string

---

##### `createAndUpdateComprehendAction`<sup>Required</sup> <a name="createAndUpdateComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```typescript
public readonly createAndUpdateComprehendAction: string;
```

- *Type:* string

---

##### `createAndUpdateComprehendMedicalAction`<sup>Required</sup> <a name="createAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```typescript
public readonly createAndUpdateComprehendMedicalAction: string;
```

- *Type:* string

---

##### `createAndUpdateConfluenceAction`<sup>Required</sup> <a name="createAndUpdateConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```typescript
public readonly createAndUpdateConfluenceAction: string;
```

- *Type:* string

---

##### `createAndUpdateDashboardEmailReports`<sup>Required</sup> <a name="createAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```typescript
public readonly createAndUpdateDashboardEmailReports: string;
```

- *Type:* string

---

##### `createAndUpdateDatasets`<sup>Required</sup> <a name="createAndUpdateDatasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```typescript
public readonly createAndUpdateDatasets: string;
```

- *Type:* string

---

##### `createAndUpdateDataSources`<sup>Required</sup> <a name="createAndUpdateDataSources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```typescript
public readonly createAndUpdateDataSources: string;
```

- *Type:* string

---

##### `createAndUpdateFactSetAction`<sup>Required</sup> <a name="createAndUpdateFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```typescript
public readonly createAndUpdateFactSetAction: string;
```

- *Type:* string

---

##### `createAndUpdateGenericHttpAction`<sup>Required</sup> <a name="createAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```typescript
public readonly createAndUpdateGenericHttpAction: string;
```

- *Type:* string

---

##### `createAndUpdateGithubAction`<sup>Required</sup> <a name="createAndUpdateGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```typescript
public readonly createAndUpdateGithubAction: string;
```

- *Type:* string

---

##### `createAndUpdateGoogleCalendarAction`<sup>Required</sup> <a name="createAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```typescript
public readonly createAndUpdateGoogleCalendarAction: string;
```

- *Type:* string

---

##### `createAndUpdateHubspotAction`<sup>Required</sup> <a name="createAndUpdateHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```typescript
public readonly createAndUpdateHubspotAction: string;
```

- *Type:* string

---

##### `createAndUpdateHuggingFaceAction`<sup>Required</sup> <a name="createAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```typescript
public readonly createAndUpdateHuggingFaceAction: string;
```

- *Type:* string

---

##### `createAndUpdateIntercomAction`<sup>Required</sup> <a name="createAndUpdateIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```typescript
public readonly createAndUpdateIntercomAction: string;
```

- *Type:* string

---

##### `createAndUpdateJiraAction`<sup>Required</sup> <a name="createAndUpdateJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```typescript
public readonly createAndUpdateJiraAction: string;
```

- *Type:* string

---

##### `createAndUpdateKnowledgeBases`<sup>Required</sup> <a name="createAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```typescript
public readonly createAndUpdateKnowledgeBases: string;
```

- *Type:* string

---

##### `createAndUpdateLinearAction`<sup>Required</sup> <a name="createAndUpdateLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```typescript
public readonly createAndUpdateLinearAction: string;
```

- *Type:* string

---

##### `createAndUpdateMcpAction`<sup>Required</sup> <a name="createAndUpdateMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```typescript
public readonly createAndUpdateMcpAction: string;
```

- *Type:* string

---

##### `createAndUpdateMondayAction`<sup>Required</sup> <a name="createAndUpdateMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```typescript
public readonly createAndUpdateMondayAction: string;
```

- *Type:* string

---

##### `createAndUpdateMsExchangeAction`<sup>Required</sup> <a name="createAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```typescript
public readonly createAndUpdateMsExchangeAction: string;
```

- *Type:* string

---

##### `createAndUpdateMsTeamsAction`<sup>Required</sup> <a name="createAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```typescript
public readonly createAndUpdateMsTeamsAction: string;
```

- *Type:* string

---

##### `createAndUpdateNewRelicAction`<sup>Required</sup> <a name="createAndUpdateNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```typescript
public readonly createAndUpdateNewRelicAction: string;
```

- *Type:* string

---

##### `createAndUpdateNotionAction`<sup>Required</sup> <a name="createAndUpdateNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```typescript
public readonly createAndUpdateNotionAction: string;
```

- *Type:* string

---

##### `createAndUpdateOneDriveAction`<sup>Required</sup> <a name="createAndUpdateOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```typescript
public readonly createAndUpdateOneDriveAction: string;
```

- *Type:* string

---

##### `createAndUpdateOpenApiAction`<sup>Required</sup> <a name="createAndUpdateOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```typescript
public readonly createAndUpdateOpenApiAction: string;
```

- *Type:* string

---

##### `createAndUpdatePagerDutyAction`<sup>Required</sup> <a name="createAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```typescript
public readonly createAndUpdatePagerDutyAction: string;
```

- *Type:* string

---

##### `createAndUpdateSalesforceAction`<sup>Required</sup> <a name="createAndUpdateSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```typescript
public readonly createAndUpdateSalesforceAction: string;
```

- *Type:* string

---

##### `createAndUpdateSandPGlobalEnergyAction`<sup>Required</sup> <a name="createAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```typescript
public readonly createAndUpdateSandPGlobalEnergyAction: string;
```

- *Type:* string

---

##### `createAndUpdateSandPgmiAction`<sup>Required</sup> <a name="createAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```typescript
public readonly createAndUpdateSandPgmiAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapBillOfMaterialAction`<sup>Required</sup> <a name="createAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```typescript
public readonly createAndUpdateSapBillOfMaterialAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapBusinessPartnerAction`<sup>Required</sup> <a name="createAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```typescript
public readonly createAndUpdateSapBusinessPartnerAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapMaterialStockAction`<sup>Required</sup> <a name="createAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```typescript
public readonly createAndUpdateSapMaterialStockAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapPhysicalInventoryAction`<sup>Required</sup> <a name="createAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```typescript
public readonly createAndUpdateSapPhysicalInventoryAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapProductMasterDataAction`<sup>Required</sup> <a name="createAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```typescript
public readonly createAndUpdateSapProductMasterDataAction: string;
```

- *Type:* string

---

##### `createAndUpdateServiceNowAction`<sup>Required</sup> <a name="createAndUpdateServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```typescript
public readonly createAndUpdateServiceNowAction: string;
```

- *Type:* string

---

##### `createAndUpdateSharePointAction`<sup>Required</sup> <a name="createAndUpdateSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```typescript
public readonly createAndUpdateSharePointAction: string;
```

- *Type:* string

---

##### `createAndUpdateSlackAction`<sup>Required</sup> <a name="createAndUpdateSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```typescript
public readonly createAndUpdateSlackAction: string;
```

- *Type:* string

---

##### `createAndUpdateSmartsheetAction`<sup>Required</sup> <a name="createAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```typescript
public readonly createAndUpdateSmartsheetAction: string;
```

- *Type:* string

---

##### `createAndUpdateTextractAction`<sup>Required</sup> <a name="createAndUpdateTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```typescript
public readonly createAndUpdateTextractAction: string;
```

- *Type:* string

---

##### `createAndUpdateThemes`<sup>Required</sup> <a name="createAndUpdateThemes" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```typescript
public readonly createAndUpdateThemes: string;
```

- *Type:* string

---

##### `createAndUpdateThresholdAlerts`<sup>Required</sup> <a name="createAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```typescript
public readonly createAndUpdateThresholdAlerts: string;
```

- *Type:* string

---

##### `createAndUpdateZendeskAction`<sup>Required</sup> <a name="createAndUpdateZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```typescript
public readonly createAndUpdateZendeskAction: string;
```

- *Type:* string

---

##### `createChatAgents`<sup>Required</sup> <a name="createChatAgents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```typescript
public readonly createChatAgents: string;
```

- *Type:* string

---

##### `createDashboardExecutiveSummaryWithQ`<sup>Required</sup> <a name="createDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```typescript
public readonly createDashboardExecutiveSummaryWithQ: string;
```

- *Type:* string

---

##### `createSharedFolders`<sup>Required</sup> <a name="createSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```typescript
public readonly createSharedFolders: string;
```

- *Type:* string

---

##### `createSpaces`<sup>Required</sup> <a name="createSpaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```typescript
public readonly createSpaces: string;
```

- *Type:* string

---

##### `createSpiceDataset`<sup>Required</sup> <a name="createSpiceDataset" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```typescript
public readonly createSpiceDataset: string;
```

- *Type:* string

---

##### `dashboard`<sup>Required</sup> <a name="dashboard" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```typescript
public readonly dashboard: string;
```

- *Type:* string

---

##### `editVisualWithQ`<sup>Required</sup> <a name="editVisualWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```typescript
public readonly editVisualWithQ: string;
```

- *Type:* string

---

##### `exportToCsv`<sup>Required</sup> <a name="exportToCsv" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```typescript
public readonly exportToCsv: string;
```

- *Type:* string

---

##### `exportToCsvInScheduledReports`<sup>Required</sup> <a name="exportToCsvInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```typescript
public readonly exportToCsvInScheduledReports: string;
```

- *Type:* string

---

##### `exportToExcel`<sup>Required</sup> <a name="exportToExcel" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```typescript
public readonly exportToExcel: string;
```

- *Type:* string

---

##### `exportToExcelInScheduledReports`<sup>Required</sup> <a name="exportToExcelInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```typescript
public readonly exportToExcelInScheduledReports: string;
```

- *Type:* string

---

##### `exportToPdf`<sup>Required</sup> <a name="exportToPdf" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```typescript
public readonly exportToPdf: string;
```

- *Type:* string

---

##### `exportToPdfInScheduledReports`<sup>Required</sup> <a name="exportToPdfInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```typescript
public readonly exportToPdfInScheduledReports: string;
```

- *Type:* string

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

---

##### `factSetAction`<sup>Required</sup> <a name="factSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```typescript
public readonly factSetAction: string;
```

- *Type:* string

---

##### `flow`<sup>Required</sup> <a name="flow" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```typescript
public readonly flow: string;
```

- *Type:* string

---

##### `genericHttpAction`<sup>Required</sup> <a name="genericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```typescript
public readonly genericHttpAction: string;
```

- *Type:* string

---

##### `githubAction`<sup>Required</sup> <a name="githubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```typescript
public readonly githubAction: string;
```

- *Type:* string

---

##### `googleCalendarAction`<sup>Required</sup> <a name="googleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```typescript
public readonly googleCalendarAction: string;
```

- *Type:* string

---

##### `hubspotAction`<sup>Required</sup> <a name="hubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```typescript
public readonly hubspotAction: string;
```

- *Type:* string

---

##### `huggingFaceAction`<sup>Required</sup> <a name="huggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```typescript
public readonly huggingFaceAction: string;
```

- *Type:* string

---

##### `includeContentInScheduledReportsEmail`<sup>Required</sup> <a name="includeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```typescript
public readonly includeContentInScheduledReportsEmail: string;
```

- *Type:* string

---

##### `intercomAction`<sup>Required</sup> <a name="intercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```typescript
public readonly intercomAction: string;
```

- *Type:* string

---

##### `invokeAppsAiInference`<sup>Required</sup> <a name="invokeAppsAiInference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```typescript
public readonly invokeAppsAiInference: string;
```

- *Type:* string

---

##### `jiraAction`<sup>Required</sup> <a name="jiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```typescript
public readonly jiraAction: string;
```

- *Type:* string

---

##### `knowledgeBase`<sup>Required</sup> <a name="knowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```typescript
public readonly knowledgeBase: string;
```

- *Type:* string

---

##### `linearAction`<sup>Required</sup> <a name="linearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```typescript
public readonly linearAction: string;
```

- *Type:* string

---

##### `manageSharedFolders`<sup>Required</sup> <a name="manageSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```typescript
public readonly manageSharedFolders: string;
```

- *Type:* string

---

##### `mcpAction`<sup>Required</sup> <a name="mcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```typescript
public readonly mcpAction: string;
```

- *Type:* string

---

##### `mondayAction`<sup>Required</sup> <a name="mondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```typescript
public readonly mondayAction: string;
```

- *Type:* string

---

##### `msExchangeAction`<sup>Required</sup> <a name="msExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```typescript
public readonly msExchangeAction: string;
```

- *Type:* string

---

##### `msTeamsAction`<sup>Required</sup> <a name="msTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```typescript
public readonly msTeamsAction: string;
```

- *Type:* string

---

##### `newRelicAction`<sup>Required</sup> <a name="newRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```typescript
public readonly newRelicAction: string;
```

- *Type:* string

---

##### `notionAction`<sup>Required</sup> <a name="notionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```typescript
public readonly notionAction: string;
```

- *Type:* string

---

##### `oneDriveAction`<sup>Required</sup> <a name="oneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```typescript
public readonly oneDriveAction: string;
```

- *Type:* string

---

##### `openApiAction`<sup>Required</sup> <a name="openApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```typescript
public readonly openApiAction: string;
```

- *Type:* string

---

##### `pagerDutyAction`<sup>Required</sup> <a name="pagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```typescript
public readonly pagerDutyAction: string;
```

- *Type:* string

---

##### `performFlowUiTask`<sup>Required</sup> <a name="performFlowUiTask" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```typescript
public readonly performFlowUiTask: string;
```

- *Type:* string

---

##### `printReports`<sup>Required</sup> <a name="printReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```typescript
public readonly printReports: string;
```

- *Type:* string

---

##### `publishWithoutApproval`<sup>Required</sup> <a name="publishWithoutApproval" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```typescript
public readonly publishWithoutApproval: string;
```

- *Type:* string

---

##### `renameSharedFolders`<sup>Required</sup> <a name="renameSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```typescript
public readonly renameSharedFolders: string;
```

- *Type:* string

---

##### `research`<sup>Required</sup> <a name="research" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```typescript
public readonly research: string;
```

- *Type:* string

---

##### `salesforceAction`<sup>Required</sup> <a name="salesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```typescript
public readonly salesforceAction: string;
```

- *Type:* string

---

##### `sandPGlobalEnergyAction`<sup>Required</sup> <a name="sandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```typescript
public readonly sandPGlobalEnergyAction: string;
```

- *Type:* string

---

##### `sandPgmiAction`<sup>Required</sup> <a name="sandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```typescript
public readonly sandPgmiAction: string;
```

- *Type:* string

---

##### `sapBillOfMaterialAction`<sup>Required</sup> <a name="sapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```typescript
public readonly sapBillOfMaterialAction: string;
```

- *Type:* string

---

##### `sapBusinessPartnerAction`<sup>Required</sup> <a name="sapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```typescript
public readonly sapBusinessPartnerAction: string;
```

- *Type:* string

---

##### `sapMaterialStockAction`<sup>Required</sup> <a name="sapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```typescript
public readonly sapMaterialStockAction: string;
```

- *Type:* string

---

##### `sapPhysicalInventoryAction`<sup>Required</sup> <a name="sapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```typescript
public readonly sapPhysicalInventoryAction: string;
```

- *Type:* string

---

##### `sapProductMasterDataAction`<sup>Required</sup> <a name="sapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```typescript
public readonly sapProductMasterDataAction: string;
```

- *Type:* string

---

##### `serviceNowAction`<sup>Required</sup> <a name="serviceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```typescript
public readonly serviceNowAction: string;
```

- *Type:* string

---

##### `shareAmazonBedrockArsAction`<sup>Required</sup> <a name="shareAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```typescript
public readonly shareAmazonBedrockArsAction: string;
```

- *Type:* string

---

##### `shareAmazonBedrockFsAction`<sup>Required</sup> <a name="shareAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```typescript
public readonly shareAmazonBedrockFsAction: string;
```

- *Type:* string

---

##### `shareAmazonBedrockKrsAction`<sup>Required</sup> <a name="shareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```typescript
public readonly shareAmazonBedrockKrsAction: string;
```

- *Type:* string

---

##### `shareAmazonSThreeAction`<sup>Required</sup> <a name="shareAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```typescript
public readonly shareAmazonSThreeAction: string;
```

- *Type:* string

---

##### `shareAnalyses`<sup>Required</sup> <a name="shareAnalyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```typescript
public readonly shareAnalyses: string;
```

- *Type:* string

---

##### `shareApps`<sup>Required</sup> <a name="shareApps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```typescript
public readonly shareApps: string;
```

- *Type:* string

---

##### `shareAsanaAction`<sup>Required</sup> <a name="shareAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```typescript
public readonly shareAsanaAction: string;
```

- *Type:* string

---

##### `shareBambooHrAction`<sup>Required</sup> <a name="shareBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```typescript
public readonly shareBambooHrAction: string;
```

- *Type:* string

---

##### `shareBoxAgentAction`<sup>Required</sup> <a name="shareBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```typescript
public readonly shareBoxAgentAction: string;
```

- *Type:* string

---

##### `shareCanvaAgentAction`<sup>Required</sup> <a name="shareCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```typescript
public readonly shareCanvaAgentAction: string;
```

- *Type:* string

---

##### `shareChatAgents`<sup>Required</sup> <a name="shareChatAgents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```typescript
public readonly shareChatAgents: string;
```

- *Type:* string

---

##### `shareComprehendAction`<sup>Required</sup> <a name="shareComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```typescript
public readonly shareComprehendAction: string;
```

- *Type:* string

---

##### `shareComprehendMedicalAction`<sup>Required</sup> <a name="shareComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```typescript
public readonly shareComprehendMedicalAction: string;
```

- *Type:* string

---

##### `shareConfluenceAction`<sup>Required</sup> <a name="shareConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```typescript
public readonly shareConfluenceAction: string;
```

- *Type:* string

---

##### `shareDashboards`<sup>Required</sup> <a name="shareDashboards" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```typescript
public readonly shareDashboards: string;
```

- *Type:* string

---

##### `shareDatasets`<sup>Required</sup> <a name="shareDatasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```typescript
public readonly shareDatasets: string;
```

- *Type:* string

---

##### `shareDataSources`<sup>Required</sup> <a name="shareDataSources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```typescript
public readonly shareDataSources: string;
```

- *Type:* string

---

##### `shareFactSetAction`<sup>Required</sup> <a name="shareFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```typescript
public readonly shareFactSetAction: string;
```

- *Type:* string

---

##### `shareGenericHttpAction`<sup>Required</sup> <a name="shareGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```typescript
public readonly shareGenericHttpAction: string;
```

- *Type:* string

---

##### `shareGithubAction`<sup>Required</sup> <a name="shareGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```typescript
public readonly shareGithubAction: string;
```

- *Type:* string

---

##### `shareGoogleCalendarAction`<sup>Required</sup> <a name="shareGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```typescript
public readonly shareGoogleCalendarAction: string;
```

- *Type:* string

---

##### `shareHubspotAction`<sup>Required</sup> <a name="shareHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```typescript
public readonly shareHubspotAction: string;
```

- *Type:* string

---

##### `shareHuggingFaceAction`<sup>Required</sup> <a name="shareHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```typescript
public readonly shareHuggingFaceAction: string;
```

- *Type:* string

---

##### `shareIntercomAction`<sup>Required</sup> <a name="shareIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```typescript
public readonly shareIntercomAction: string;
```

- *Type:* string

---

##### `shareJiraAction`<sup>Required</sup> <a name="shareJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```typescript
public readonly shareJiraAction: string;
```

- *Type:* string

---

##### `shareKnowledgeBases`<sup>Required</sup> <a name="shareKnowledgeBases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```typescript
public readonly shareKnowledgeBases: string;
```

- *Type:* string

---

##### `shareLinearAction`<sup>Required</sup> <a name="shareLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```typescript
public readonly shareLinearAction: string;
```

- *Type:* string

---

##### `shareMcpAction`<sup>Required</sup> <a name="shareMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```typescript
public readonly shareMcpAction: string;
```

- *Type:* string

---

##### `shareMondayAction`<sup>Required</sup> <a name="shareMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```typescript
public readonly shareMondayAction: string;
```

- *Type:* string

---

##### `shareMsExchangeAction`<sup>Required</sup> <a name="shareMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```typescript
public readonly shareMsExchangeAction: string;
```

- *Type:* string

---

##### `shareMsTeamsAction`<sup>Required</sup> <a name="shareMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```typescript
public readonly shareMsTeamsAction: string;
```

- *Type:* string

---

##### `shareNewRelicAction`<sup>Required</sup> <a name="shareNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```typescript
public readonly shareNewRelicAction: string;
```

- *Type:* string

---

##### `shareNotionAction`<sup>Required</sup> <a name="shareNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```typescript
public readonly shareNotionAction: string;
```

- *Type:* string

---

##### `shareOneDriveAction`<sup>Required</sup> <a name="shareOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```typescript
public readonly shareOneDriveAction: string;
```

- *Type:* string

---

##### `shareOpenApiAction`<sup>Required</sup> <a name="shareOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```typescript
public readonly shareOpenApiAction: string;
```

- *Type:* string

---

##### `sharePagerDutyAction`<sup>Required</sup> <a name="sharePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```typescript
public readonly sharePagerDutyAction: string;
```

- *Type:* string

---

##### `sharePointAction`<sup>Required</sup> <a name="sharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```typescript
public readonly sharePointAction: string;
```

- *Type:* string

---

##### `shareSalesforceAction`<sup>Required</sup> <a name="shareSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```typescript
public readonly shareSalesforceAction: string;
```

- *Type:* string

---

##### `shareSandPGlobalEnergyAction`<sup>Required</sup> <a name="shareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```typescript
public readonly shareSandPGlobalEnergyAction: string;
```

- *Type:* string

---

##### `shareSandPgmiAction`<sup>Required</sup> <a name="shareSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```typescript
public readonly shareSandPgmiAction: string;
```

- *Type:* string

---

##### `shareSapBillOfMaterialAction`<sup>Required</sup> <a name="shareSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```typescript
public readonly shareSapBillOfMaterialAction: string;
```

- *Type:* string

---

##### `shareSapBusinessPartnerAction`<sup>Required</sup> <a name="shareSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```typescript
public readonly shareSapBusinessPartnerAction: string;
```

- *Type:* string

---

##### `shareSapMaterialStockAction`<sup>Required</sup> <a name="shareSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```typescript
public readonly shareSapMaterialStockAction: string;
```

- *Type:* string

---

##### `shareSapPhysicalInventoryAction`<sup>Required</sup> <a name="shareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```typescript
public readonly shareSapPhysicalInventoryAction: string;
```

- *Type:* string

---

##### `shareSapProductMasterDataAction`<sup>Required</sup> <a name="shareSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```typescript
public readonly shareSapProductMasterDataAction: string;
```

- *Type:* string

---

##### `shareServiceNowAction`<sup>Required</sup> <a name="shareServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```typescript
public readonly shareServiceNowAction: string;
```

- *Type:* string

---

##### `shareSharePointAction`<sup>Required</sup> <a name="shareSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```typescript
public readonly shareSharePointAction: string;
```

- *Type:* string

---

##### `shareSlackAction`<sup>Required</sup> <a name="shareSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```typescript
public readonly shareSlackAction: string;
```

- *Type:* string

---

##### `shareSmartsheetAction`<sup>Required</sup> <a name="shareSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```typescript
public readonly shareSmartsheetAction: string;
```

- *Type:* string

---

##### `shareSpaces`<sup>Required</sup> <a name="shareSpaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```typescript
public readonly shareSpaces: string;
```

- *Type:* string

---

##### `shareTextractAction`<sup>Required</sup> <a name="shareTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```typescript
public readonly shareTextractAction: string;
```

- *Type:* string

---

##### `shareZendeskAction`<sup>Required</sup> <a name="shareZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```typescript
public readonly shareZendeskAction: string;
```

- *Type:* string

---

##### `slackAction`<sup>Required</sup> <a name="slackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```typescript
public readonly slackAction: string;
```

- *Type:* string

---

##### `smartsheetAction`<sup>Required</sup> <a name="smartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```typescript
public readonly smartsheetAction: string;
```

- *Type:* string

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

---

##### `subscribeDashboardEmailReports`<sup>Required</sup> <a name="subscribeDashboardEmailReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```typescript
public readonly subscribeDashboardEmailReports: string;
```

- *Type:* string

---

##### `textractAction`<sup>Required</sup> <a name="textractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```typescript
public readonly textractAction: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `useAgentWebSearch`<sup>Required</sup> <a name="useAgentWebSearch" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```typescript
public readonly useAgentWebSearch: string;
```

- *Type:* string

---

##### `useAmazonBedrockArsAction`<sup>Required</sup> <a name="useAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```typescript
public readonly useAmazonBedrockArsAction: string;
```

- *Type:* string

---

##### `useAmazonBedrockFsAction`<sup>Required</sup> <a name="useAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```typescript
public readonly useAmazonBedrockFsAction: string;
```

- *Type:* string

---

##### `useAmazonBedrockKrsAction`<sup>Required</sup> <a name="useAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```typescript
public readonly useAmazonBedrockKrsAction: string;
```

- *Type:* string

---

##### `useAmazonSThreeAction`<sup>Required</sup> <a name="useAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```typescript
public readonly useAmazonSThreeAction: string;
```

- *Type:* string

---

##### `useAsanaAction`<sup>Required</sup> <a name="useAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```typescript
public readonly useAsanaAction: string;
```

- *Type:* string

---

##### `useBambooHrAction`<sup>Required</sup> <a name="useBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```typescript
public readonly useBambooHrAction: string;
```

- *Type:* string

---

##### `useBedrockModels`<sup>Required</sup> <a name="useBedrockModels" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```typescript
public readonly useBedrockModels: string;
```

- *Type:* string

---

##### `useBoxAgentAction`<sup>Required</sup> <a name="useBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```typescript
public readonly useBoxAgentAction: string;
```

- *Type:* string

---

##### `useCanvaAgentAction`<sup>Required</sup> <a name="useCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```typescript
public readonly useCanvaAgentAction: string;
```

- *Type:* string

---

##### `useComprehendAction`<sup>Required</sup> <a name="useComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```typescript
public readonly useComprehendAction: string;
```

- *Type:* string

---

##### `useComprehendMedicalAction`<sup>Required</sup> <a name="useComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```typescript
public readonly useComprehendMedicalAction: string;
```

- *Type:* string

---

##### `useConfluenceAction`<sup>Required</sup> <a name="useConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```typescript
public readonly useConfluenceAction: string;
```

- *Type:* string

---

##### `useFactSetAction`<sup>Required</sup> <a name="useFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```typescript
public readonly useFactSetAction: string;
```

- *Type:* string

---

##### `useGenericHttpAction`<sup>Required</sup> <a name="useGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```typescript
public readonly useGenericHttpAction: string;
```

- *Type:* string

---

##### `useGithubAction`<sup>Required</sup> <a name="useGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```typescript
public readonly useGithubAction: string;
```

- *Type:* string

---

##### `useGoogleCalendarAction`<sup>Required</sup> <a name="useGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```typescript
public readonly useGoogleCalendarAction: string;
```

- *Type:* string

---

##### `useHubspotAction`<sup>Required</sup> <a name="useHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```typescript
public readonly useHubspotAction: string;
```

- *Type:* string

---

##### `useHuggingFaceAction`<sup>Required</sup> <a name="useHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```typescript
public readonly useHuggingFaceAction: string;
```

- *Type:* string

---

##### `useIntercomAction`<sup>Required</sup> <a name="useIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```typescript
public readonly useIntercomAction: string;
```

- *Type:* string

---

##### `useJiraAction`<sup>Required</sup> <a name="useJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```typescript
public readonly useJiraAction: string;
```

- *Type:* string

---

##### `useLinearAction`<sup>Required</sup> <a name="useLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```typescript
public readonly useLinearAction: string;
```

- *Type:* string

---

##### `useMcpAction`<sup>Required</sup> <a name="useMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```typescript
public readonly useMcpAction: string;
```

- *Type:* string

---

##### `useMondayAction`<sup>Required</sup> <a name="useMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```typescript
public readonly useMondayAction: string;
```

- *Type:* string

---

##### `useMsExchangeAction`<sup>Required</sup> <a name="useMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```typescript
public readonly useMsExchangeAction: string;
```

- *Type:* string

---

##### `useMsTeamsAction`<sup>Required</sup> <a name="useMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```typescript
public readonly useMsTeamsAction: string;
```

- *Type:* string

---

##### `useNewRelicAction`<sup>Required</sup> <a name="useNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```typescript
public readonly useNewRelicAction: string;
```

- *Type:* string

---

##### `useNotionAction`<sup>Required</sup> <a name="useNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```typescript
public readonly useNotionAction: string;
```

- *Type:* string

---

##### `useOneDriveAction`<sup>Required</sup> <a name="useOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```typescript
public readonly useOneDriveAction: string;
```

- *Type:* string

---

##### `useOpenApiAction`<sup>Required</sup> <a name="useOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```typescript
public readonly useOpenApiAction: string;
```

- *Type:* string

---

##### `usePagerDutyAction`<sup>Required</sup> <a name="usePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```typescript
public readonly usePagerDutyAction: string;
```

- *Type:* string

---

##### `useSalesforceAction`<sup>Required</sup> <a name="useSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```typescript
public readonly useSalesforceAction: string;
```

- *Type:* string

---

##### `useSandPGlobalEnergyAction`<sup>Required</sup> <a name="useSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```typescript
public readonly useSandPGlobalEnergyAction: string;
```

- *Type:* string

---

##### `useSandPgmiAction`<sup>Required</sup> <a name="useSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```typescript
public readonly useSandPgmiAction: string;
```

- *Type:* string

---

##### `useSapBillOfMaterialAction`<sup>Required</sup> <a name="useSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```typescript
public readonly useSapBillOfMaterialAction: string;
```

- *Type:* string

---

##### `useSapBusinessPartnerAction`<sup>Required</sup> <a name="useSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```typescript
public readonly useSapBusinessPartnerAction: string;
```

- *Type:* string

---

##### `useSapMaterialStockAction`<sup>Required</sup> <a name="useSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```typescript
public readonly useSapMaterialStockAction: string;
```

- *Type:* string

---

##### `useSapPhysicalInventoryAction`<sup>Required</sup> <a name="useSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```typescript
public readonly useSapPhysicalInventoryAction: string;
```

- *Type:* string

---

##### `useSapProductMasterDataAction`<sup>Required</sup> <a name="useSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```typescript
public readonly useSapProductMasterDataAction: string;
```

- *Type:* string

---

##### `useServiceNowAction`<sup>Required</sup> <a name="useServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```typescript
public readonly useServiceNowAction: string;
```

- *Type:* string

---

##### `useSharePointAction`<sup>Required</sup> <a name="useSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```typescript
public readonly useSharePointAction: string;
```

- *Type:* string

---

##### `useSlackAction`<sup>Required</sup> <a name="useSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```typescript
public readonly useSlackAction: string;
```

- *Type:* string

---

##### `useSmartsheetAction`<sup>Required</sup> <a name="useSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```typescript
public readonly useSmartsheetAction: string;
```

- *Type:* string

---

##### `useTextractAction`<sup>Required</sup> <a name="useTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```typescript
public readonly useTextractAction: string;
```

- *Type:* string

---

##### `useZendeskAction`<sup>Required</sup> <a name="useZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```typescript
public readonly useZendeskAction: string;
```

- *Type:* string

---

##### `viewAccountSpiceCapacity`<sup>Required</sup> <a name="viewAccountSpiceCapacity" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```typescript
public readonly viewAccountSpiceCapacity: string;
```

- *Type:* string

---

##### `zendeskAction`<sup>Required</sup> <a name="zendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```typescript
public readonly zendeskAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightCustomPermissionsCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a>

---


### DataAwsccQuicksightCustomPermissionsTagsList <a name="DataAwsccQuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

new dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightCustomPermissionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightCustomPermissionsTagsOutputReference <a name="DataAwsccQuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightCustomPermissions } from '@cdktn/provider-awscc'

new dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightCustomPermissionsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a>

---



