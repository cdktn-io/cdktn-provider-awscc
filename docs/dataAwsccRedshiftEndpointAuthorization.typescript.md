# `dataAwsccRedshiftEndpointAuthorization` Submodule <a name="`dataAwsccRedshiftEndpointAuthorization` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftEndpointAuthorization <a name="DataAwsccRedshiftEndpointAuthorization" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/redshift_endpoint_authorization awscc_redshift_endpoint_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.Initializer"></a>

```typescript
import { dataAwsccRedshiftEndpointAuthorization } from '@cdktn/provider-awscc'

new dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization(scope: Construct, id: string, config: DataAwsccRedshiftEndpointAuthorizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig">DataAwsccRedshiftEndpointAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig">DataAwsccRedshiftEndpointAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftEndpointAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isConstruct"></a>

```typescript
import { dataAwsccRedshiftEndpointAuthorization } from '@cdktn/provider-awscc'

dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isTerraformElement"></a>

```typescript
import { dataAwsccRedshiftEndpointAuthorization } from '@cdktn/provider-awscc'

dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isTerraformDataSource"></a>

```typescript
import { dataAwsccRedshiftEndpointAuthorization } from '@cdktn/provider-awscc'

dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.generateConfigForImport"></a>

```typescript
import { dataAwsccRedshiftEndpointAuthorization } from '@cdktn/provider-awscc'

dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRedshiftEndpointAuthorization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRedshiftEndpointAuthorization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRedshiftEndpointAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/redshift_endpoint_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftEndpointAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.allowedAllVpCs">allowedAllVpCs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.allowedVpCs">allowedVpCs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.authorizeTime">authorizeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.clusterStatus">clusterStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.endpointCount">endpointCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.force">force</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.grantee">grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.grantor">grantor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.vpcIds">vpcIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `allowedAllVpCs`<sup>Required</sup> <a name="allowedAllVpCs" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.allowedAllVpCs"></a>

```typescript
public readonly allowedAllVpCs: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `allowedVpCs`<sup>Required</sup> <a name="allowedVpCs" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.allowedVpCs"></a>

```typescript
public readonly allowedVpCs: string[];
```

- *Type:* string[]

---

##### `authorizeTime`<sup>Required</sup> <a name="authorizeTime" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.authorizeTime"></a>

```typescript
public readonly authorizeTime: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `clusterStatus`<sup>Required</sup> <a name="clusterStatus" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.clusterStatus"></a>

```typescript
public readonly clusterStatus: string;
```

- *Type:* string

---

##### `endpointCount`<sup>Required</sup> <a name="endpointCount" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.endpointCount"></a>

```typescript
public readonly endpointCount: number;
```

- *Type:* number

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.force"></a>

```typescript
public readonly force: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.grantor"></a>

```typescript
public readonly grantor: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vpcIds`<sup>Required</sup> <a name="vpcIds" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.vpcIds"></a>

```typescript
public readonly vpcIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftEndpointAuthorizationConfig <a name="DataAwsccRedshiftEndpointAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.Initializer"></a>

```typescript
import { dataAwsccRedshiftEndpointAuthorization } from '@cdktn/provider-awscc'

const dataAwsccRedshiftEndpointAuthorizationConfig: dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAuthorization.DataAwsccRedshiftEndpointAuthorizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/redshift_endpoint_authorization#id DataAwsccRedshiftEndpointAuthorization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



