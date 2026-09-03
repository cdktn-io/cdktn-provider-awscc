# `dataAwsccWorkspacesthinclientEnvironment` Submodule <a name="`dataAwsccWorkspacesthinclientEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesthinclientEnvironment <a name="DataAwsccWorkspacesthinclientEnvironment" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/workspacesthinclient_environment awscc_workspacesthinclient_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment(scope: Construct, id: string, config: DataAwsccWorkspacesthinclientEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig">DataAwsccWorkspacesthinclientEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig">DataAwsccWorkspacesthinclientEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isConstruct"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformElement"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformDataSource"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspacesthinclientEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspacesthinclientEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/workspacesthinclient_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesthinclientEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.activationCode">activationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desiredSoftwareSetId">desiredSoftwareSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopArn">desktopArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopEndpoint">desktopEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopType">desktopType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.deviceCreationTags">deviceCreationTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList">DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.pendingSoftwareSetId">pendingSoftwareSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion">pendingSoftwareSetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.registeredDevicesCount">registeredDevicesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetComplianceStatus">softwareSetComplianceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetUpdateMode">softwareSetUpdateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule">softwareSetUpdateSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList">DataAwsccWorkspacesthinclientEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `activationCode`<sup>Required</sup> <a name="activationCode" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.activationCode"></a>

```typescript
public readonly activationCode: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `desiredSoftwareSetId`<sup>Required</sup> <a name="desiredSoftwareSetId" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desiredSoftwareSetId"></a>

```typescript
public readonly desiredSoftwareSetId: string;
```

- *Type:* string

---

##### `desktopArn`<sup>Required</sup> <a name="desktopArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopArn"></a>

```typescript
public readonly desktopArn: string;
```

- *Type:* string

---

##### `desktopEndpoint`<sup>Required</sup> <a name="desktopEndpoint" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopEndpoint"></a>

```typescript
public readonly desktopEndpoint: string;
```

- *Type:* string

---

##### `desktopType`<sup>Required</sup> <a name="desktopType" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopType"></a>

```typescript
public readonly desktopType: string;
```

- *Type:* string

---

##### `deviceCreationTags`<sup>Required</sup> <a name="deviceCreationTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.deviceCreationTags"></a>

```typescript
public readonly deviceCreationTags: DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList">DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList</a>

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pendingSoftwareSetId`<sup>Required</sup> <a name="pendingSoftwareSetId" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.pendingSoftwareSetId"></a>

```typescript
public readonly pendingSoftwareSetId: string;
```

- *Type:* string

---

##### `pendingSoftwareSetVersion`<sup>Required</sup> <a name="pendingSoftwareSetVersion" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion"></a>

```typescript
public readonly pendingSoftwareSetVersion: string;
```

- *Type:* string

---

##### `registeredDevicesCount`<sup>Required</sup> <a name="registeredDevicesCount" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.registeredDevicesCount"></a>

```typescript
public readonly registeredDevicesCount: number;
```

- *Type:* number

---

##### `softwareSetComplianceStatus`<sup>Required</sup> <a name="softwareSetComplianceStatus" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetComplianceStatus"></a>

```typescript
public readonly softwareSetComplianceStatus: string;
```

- *Type:* string

---

##### `softwareSetUpdateMode`<sup>Required</sup> <a name="softwareSetUpdateMode" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetUpdateMode"></a>

```typescript
public readonly softwareSetUpdateMode: string;
```

- *Type:* string

---

##### `softwareSetUpdateSchedule`<sup>Required</sup> <a name="softwareSetUpdateSchedule" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule"></a>

```typescript
public readonly softwareSetUpdateSchedule: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.tags"></a>

```typescript
public readonly tags: DataAwsccWorkspacesthinclientEnvironmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList">DataAwsccWorkspacesthinclientEnvironmentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesthinclientEnvironmentConfig <a name="DataAwsccWorkspacesthinclientEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

const dataAwsccWorkspacesthinclientEnvironmentConfig: dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/workspacesthinclient_environment#id DataAwsccWorkspacesthinclientEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags <a name="DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

const dataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags: dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags = { ... }
```


### DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow <a name="DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

const dataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow: dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow = { ... }
```


### DataAwsccWorkspacesthinclientEnvironmentTags <a name="DataAwsccWorkspacesthinclientEnvironmentTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

const dataAwsccWorkspacesthinclientEnvironmentTags: dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList <a name="DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference <a name="DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags">DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags">DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags</a>

---


### DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference <a name="DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf">applyTimeOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour">endTimeHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute">endTimeMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour">startTimeHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute">startTimeMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow">DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyTimeOf`<sup>Required</sup> <a name="applyTimeOf" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf"></a>

```typescript
public readonly applyTimeOf: string;
```

- *Type:* string

---

##### `daysOfTheWeek`<sup>Required</sup> <a name="daysOfTheWeek" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek"></a>

```typescript
public readonly daysOfTheWeek: string[];
```

- *Type:* string[]

---

##### `endTimeHour`<sup>Required</sup> <a name="endTimeHour" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour"></a>

```typescript
public readonly endTimeHour: number;
```

- *Type:* number

---

##### `endTimeMinute`<sup>Required</sup> <a name="endTimeMinute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute"></a>

```typescript
public readonly endTimeMinute: number;
```

- *Type:* number

---

##### `startTimeHour`<sup>Required</sup> <a name="startTimeHour" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour"></a>

```typescript
public readonly startTimeHour: number;
```

- *Type:* number

---

##### `startTimeMinute`<sup>Required</sup> <a name="startTimeMinute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute"></a>

```typescript
public readonly startTimeMinute: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow">DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow</a>

---


### DataAwsccWorkspacesthinclientEnvironmentTagsList <a name="DataAwsccWorkspacesthinclientEnvironmentTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference <a name="DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWorkspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags">DataAwsccWorkspacesthinclientEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWorkspacesthinclientEnvironmentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags">DataAwsccWorkspacesthinclientEnvironmentTags</a>

---



